import React from 'react';
import { useApp } from '../context/AppContext';

export const WatchHistory: React.FC = () => {
  const { watchHistory, videos } = useApp();

  const getVideoTitle = (videoId: string) => {
    const video = videos.find(v => v.id === videoId);
    return video ? video.title : 'Unknown Video';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">📊 Watch History</h3>
      <div className="space-y-2 max-h-96 overflow-y-auto">
        {watchHistory.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No watch history yet</p>
        ) : (
          watchHistory.slice(-10).reverse().map((session, idx) => (
            <div key={idx} className="p-3 bg-gray-50 rounded-lg">
              <p className="font-semibold text-gray-800">{getVideoTitle(session.videoId)}</p>
              <p className="text-sm text-gray-600">
                Watched {Math.floor(session.duration / 60)}m {session.duration % 60}s
                {' • '}
                {new Date(session.watchedAt).toLocaleString()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
