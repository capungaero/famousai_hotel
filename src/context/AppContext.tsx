import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Video, WatchSession, DailyLimits, AppState, SecretKeyConfig } from '../types';
import { sampleVideos } from '../utils/sampleData';


interface AppContextType extends AppState {
  addVideo: (video: Omit<Video, 'id' | 'addedAt'>) => void;
  removeVideo: (id: string) => void;
  updateLimits: (limits: DailyLimits) => void;
  updateSecretKey: (key: SecretKeyConfig) => void;
  recordWatch: (videoId: string, duration: number) => void;
  canWatchMore: () => boolean;
  resetDaily: () => void;
}


const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<AppState>(() => {
    const saved = localStorage.getItem('kidsYouTubeApp');
    const defaultSecretKey = { key: 'F2', ctrl: true, alt: false, shift: false };
    
    if (saved) {
      const parsed = JSON.parse(saved);
      return {
        ...parsed,
        videos: parsed.videos.map((v: any) => ({ ...v, addedAt: new Date(v.addedAt) })),
        watchHistory: parsed.watchHistory.map((w: any) => ({ ...w, watchedAt: new Date(w.watchedAt) })),
        secretKey: parsed.secretKey || defaultSecretKey // Fallback to default if undefined
      };
    }
    // Initialize with sample videos if first time
    const initialVideos = sampleVideos.map((v, idx) => ({
      ...v,
      id: `sample-${idx}`,
      addedAt: new Date()
    }));
    return {
      videos: initialVideos,
      watchHistory: [],
      dailyLimits: { maxVideos: 5, maxMinutes: 60 },
      secretKey: defaultSecretKey,
      todayWatched: { videos: 0, minutes: 0 }
    };


  });

  useEffect(() => {
    localStorage.setItem('kidsYouTubeApp', JSON.stringify(state));
  }, [state]);

  const addVideo = (video: Omit<Video, 'id' | 'addedAt'>) => {
    setState(prev => ({
      ...prev,
      videos: [...prev.videos, { ...video, id: Date.now().toString(), addedAt: new Date() }]
    }));
  };

  const removeVideo = (id: string) => {
    setState(prev => ({ ...prev, videos: prev.videos.filter(v => v.id !== id) }));
  };

  const updateLimits = (limits: DailyLimits) => {
    setState(prev => ({ ...prev, dailyLimits: limits }));
  };

  const updateSecretKey = (key: SecretKeyConfig) => {
    setState(prev => ({ ...prev, secretKey: key }));
  };

  const recordWatch = (videoId: string, duration: number) => {
    setState(prev => ({
      ...prev,
      watchHistory: [...prev.watchHistory, { videoId, watchedAt: new Date(), duration }],
      todayWatched: {
        videos: prev.todayWatched.videos + 1,
        minutes: prev.todayWatched.minutes + Math.floor(duration / 60)
      }
    }));
  };

  const canWatchMore = () => {
    return state.todayWatched.videos < state.dailyLimits.maxVideos &&
           state.todayWatched.minutes < state.dailyLimits.maxMinutes;
  };

  const resetDaily = () => {
    setState(prev => ({ ...prev, todayWatched: { videos: 0, minutes: 0 } }));
  };


  return (
    <AppContext.Provider value={{ ...state, addVideo, removeVideo, updateLimits, updateSecretKey, recordWatch, canWatchMore, resetDaily }}>
      {children}
    </AppContext.Provider>
  );

};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};
