import React from 'react';
import { useApp } from '../context/AppContext';

export const AdminDashboard: React.FC = () => {
  const { todayWatched, dailyLimits, videos, watchHistory } = useApp();

  const totalWatchTime = watchHistory.reduce((acc, session) => acc + session.duration, 0);
  const avgWatchTime = watchHistory.length > 0 ? Math.floor(totalWatchTime / watchHistory.length / 60) : 0;

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-xl mb-6">
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://d64gsuwffb70l.cloudfront.net/68f9aa697623c1671a730f62_1761192615818_03d5e766.webp"
          alt="Dashboard"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-6">
        <h2 className="text-3xl font-bold text-white mb-4">📊 Today's Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
            <p className="text-white text-sm font-semibold mb-1">Videos Watched</p>
            <p className="text-4xl font-bold text-white">{todayWatched.videos}</p>
            <p className="text-white text-xs">of {dailyLimits.maxVideos} allowed</p>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
            <p className="text-white text-sm font-semibold mb-1">Minutes Watched</p>
            <p className="text-4xl font-bold text-white">{todayWatched.minutes}</p>
            <p className="text-white text-xs">of {dailyLimits.maxMinutes} allowed</p>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
            <p className="text-white text-sm font-semibold mb-1">Total Videos</p>
            <p className="text-4xl font-bold text-white">{videos.length}</p>
            <p className="text-white text-xs">in playlist</p>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
            <p className="text-white text-sm font-semibold mb-1">Avg Watch Time</p>
            <p className="text-4xl font-bold text-white">{avgWatchTime}</p>
            <p className="text-white text-xs">minutes per video</p>
          </div>
        </div>
      </div>
    </div>
  );
};
