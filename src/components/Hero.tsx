import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl overflow-hidden shadow-2xl mb-8">
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://d64gsuwffb70l.cloudfront.net/68f9aa697623c1671a730f62_1761192610367_f64af84c.webp"
          alt="Kids watching videos"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 p-8 md:p-12 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          🎬 Welcome to Kids Video Time!
        </h1>
        <p className="text-2xl md:text-3xl text-white drop-shadow-md mb-6">
          Safe, fun, and parent-approved videos just for you!
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <div className="bg-white bg-opacity-90 rounded-xl px-6 py-3 shadow-lg">
            <p className="text-sm text-gray-600 font-semibold">Safe Content</p>
            <p className="text-2xl font-bold text-blue-600">✓</p>
          </div>
          <div className="bg-white bg-opacity-90 rounded-xl px-6 py-3 shadow-lg">
            <p className="text-sm text-gray-600 font-semibold">Time Limits</p>
            <p className="text-2xl font-bold text-green-600">✓</p>
          </div>
          <div className="bg-white bg-opacity-90 rounded-xl px-6 py-3 shadow-lg">
            <p className="text-sm text-gray-600 font-semibold">Parent Control</p>
            <p className="text-2xl font-bold text-purple-600">✓</p>
          </div>
        </div>
      </div>
    </div>
  );
};
