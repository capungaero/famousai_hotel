import React from 'react';
import { useApp } from '../context/AppContext';

export const Timer: React.FC = () => {
  const { todayWatched, dailyLimits } = useApp();
  
  const videosLeft = dailyLimits.maxVideos - todayWatched.videos;
  const minutesLeft = dailyLimits.maxMinutes - todayWatched.minutes;
  
  const videoProgress = (todayWatched.videos / dailyLimits.maxVideos) * 100;
  const timeProgress = (todayWatched.minutes / dailyLimits.maxMinutes) * 100;
  
  const getColor = (progress: number) => {
    if (progress < 50) return 'bg-green-500';
    if (progress < 80) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">⏰ Time Left Today</h2>
      
      <div className="space-y-4">
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-lg font-semibold text-gray-700">Videos</span>
            <span className="text-lg font-bold text-blue-600">{videosLeft} left</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div className={`h-4 rounded-full transition-all ${getColor(videoProgress)}`} style={{ width: `${videoProgress}%` }}></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-lg font-semibold text-gray-700">Minutes</span>
            <span className="text-lg font-bold text-blue-600">{minutesLeft} left</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div className={`h-4 rounded-full transition-all ${getColor(timeProgress)}`} style={{ width: `${timeProgress}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
