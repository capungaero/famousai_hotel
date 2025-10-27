export interface Video {
  id: string;
  title: string;
  youtubeId: string;
  thumbnail: string;
  duration: number; // in seconds
  addedAt: Date;
}

export interface WatchSession {
  videoId: string;
  watchedAt: Date;
  duration: number; // seconds watched
}

export interface DailyLimits {
  maxVideos: number;
  maxMinutes: number;
}

export interface SecretKeyConfig {
  key: string; // e.g., "F2"
  ctrl: boolean;
  alt: boolean;
  shift: boolean;
}


export interface AppState {
  videos: Video[];
  watchHistory: WatchSession[];
  dailyLimits: DailyLimits;
  secretKey: SecretKeyConfig;
  todayWatched: {
    videos: number;
    minutes: number;
  };
}

