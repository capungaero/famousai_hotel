import React from 'react';
import { useApp } from '../context/AppContext';

export const VideoList: React.FC = () => {
  const { videos, removeVideo } = useApp();

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">📹 Video Playlist ({videos.length})</h3>
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {videos.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No videos added yet</p>
        ) : (
          videos.map(video => (
            <div key={video.id} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
              <img src={video.thumbnail} alt={video.title} className="w-24 h-16 object-cover rounded" />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800">{video.title}</h4>
                <p className="text-sm text-gray-600">{Math.floor(video.duration / 60)} minutes</p>
              </div>
              <button
                onClick={() => removeVideo(video.id)}
                className="text-red-500 hover:text-red-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
