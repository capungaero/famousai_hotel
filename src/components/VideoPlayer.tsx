import React, { useEffect, useRef, useState } from 'react';
import { Video } from '../types';
import { useApp } from '../context/AppContext';

interface VideoPlayerProps {
  video: Video;
  onClose: () => void;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ video, onClose }) => {
  const { recordWatch, secretKey } = useApp();
  const [watchTime, setWatchTime] = useState(0);
  const [mouseUnlocked, setMouseUnlocked] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout>();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setWatchTime(prev => prev + 1);
    }, 1000);

    // Request browser fullscreen immediately
    const fullscreenTimer = setTimeout(() => {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(err => console.log(err));
      }
    }, 100);

    // Lock mouse after 2 seconds
    const mouseTimer = setTimeout(() => {
      setMouseUnlocked(false);
    }, 2000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        recordWatch(video.id, watchTime);
      }
      clearTimeout(mouseTimer);
      clearTimeout(fullscreenTimer);
      
      // Exit fullscreen when component unmounts
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
    };
  }, []);


  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const keyMatch = e.key === secretKey.key;
      const ctrlMatch = secretKey.ctrl ? e.ctrlKey : !e.ctrlKey;
      const altMatch = secretKey.alt ? e.altKey : !e.altKey;
      const shiftMatch = secretKey.shift ? e.shiftKey : !e.shiftKey;

      if (keyMatch && ctrlMatch && altMatch && shiftMatch) {
        e.preventDefault();
        setMouseUnlocked(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [secretKey]);

  const handleClose = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
    recordWatch(video.id, watchTime);
    onClose();
  };

  return (
    <div ref={containerRef} className={`fixed inset-0 bg-black z-50 flex items-center justify-center ${!mouseUnlocked ? 'cursor-none pointer-events-none' : ''}`}>

      {mouseUnlocked && (
        <button 
          onClick={handleClose} 
          className="absolute top-4 right-4 z-50 text-white text-4xl hover:scale-110 transition bg-red-500 rounded-full w-12 h-12 flex items-center justify-center"
        >
          &times;
        </button>
      )}
      <div className="w-full h-full">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&controls=0&modestbranding=1&rel=0&fs=0&disablekb=1&iv_load_policy=3`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};
