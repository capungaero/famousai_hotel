import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Timer } from '../components/Timer';
import { VideoCard } from '../components/VideoCard';
import { VideoPlayer } from '../components/VideoPlayer';
import { Hero } from '../components/Hero';
import { Footer } from '../components/Footer';
import { Video } from '../types';



export const KidsPage: React.FC = () => {
  const { videos, canWatchMore } = useApp();
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 via-pink-300 to-purple-400 p-4">
      <div className="max-w-7xl mx-auto">
        <Hero />
        <Timer />


        {!canWatchMore() && (
          <div className="bg-red-100 border-4 border-red-500 rounded-2xl p-6 mb-6 text-center">
            <p className="text-2xl font-bold text-red-700">⏰ Time's up for today!</p>
            <p className="text-lg text-red-600">Ask a parent for more time</p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videos.map(video => (
            <VideoCard
              key={video.id}
              video={video}
              onClick={() => setSelectedVideo(video)}
              canWatch={canWatchMore()}
            />
          ))}
        </div>

        {videos.length === 0 && (
          <div className="text-center py-16">
            <p className="text-3xl text-white font-bold">No videos yet!</p>
            <p className="text-xl text-white mt-2">Ask a parent to add some videos</p>
          </div>
        )}

        {selectedVideo && (
          <VideoPlayer video={selectedVideo} onClose={() => setSelectedVideo(null)} />
        )}

        <Footer />
      </div>

    </div>
  );
};
