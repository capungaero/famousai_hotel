import React from 'react';
import { Video } from '../types';

interface VideoCardProps {
  video: Video;
  onClick: () => void;
  canWatch: boolean;
}

export const VideoCard: React.FC<VideoCardProps> = ({ video, onClick, canWatch }) => {
  return (
    <div 
      onClick={canWatch ? onClick : undefined}
      className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 ${
        canWatch ? 'cursor-pointer' : 'opacity-50 cursor-not-allowed'
      }`}
    >
      <div className="relative">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
          {Math.floor(video.duration / 60)}:{(video.duration % 60).toString().padStart(2, '0')}
        </div>
        {!canWatch && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">🔒</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 line-clamp-2">{video.title}</h3>
      </div>
    </div>
  );
};
