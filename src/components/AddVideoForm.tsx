import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const AddVideoForm: React.FC = () => {
  const { addVideo } = useApp();
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [duration, setDuration] = useState('');
  const [error, setError] = useState('');

  const extractYouTubeId = (url: string): string | null => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/,
      /youtube\.com\/embed\/([^&\n?#]+)/
    ];
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    return null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const youtubeId = extractYouTubeId(url);
    if (!youtubeId) {
      setError('Invalid YouTube URL');
      return;
    }
    const durationSeconds = parseInt(duration) * 60;
    addVideo({
      title,
      youtubeId,
      thumbnail: `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`,
      duration: durationSeconds
    });
    setUrl('');
    setTitle('');
    setDuration('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6 space-y-4">
      <h3 className="text-xl font-bold text-gray-800">➕ Add New Video</h3>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">YouTube URL</label>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="https://youtube.com/watch?v=..."
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Video Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="Fun Learning Video"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Duration (minutes)</label>
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="5"
          required
        />
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition">
        Add Video
      </button>
    </form>
  );
};
