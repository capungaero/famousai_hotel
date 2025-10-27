import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const LimitSettings: React.FC = () => {
  const { dailyLimits, updateLimits, resetDaily } = useApp();
  const [maxVideos, setMaxVideos] = useState(dailyLimits.maxVideos);
  const [maxMinutes, setMaxMinutes] = useState(dailyLimits.maxMinutes);

  const handleSave = () => {
    updateLimits({ maxVideos, maxMinutes });
    alert('Limits updated successfully!');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">⚙️ Daily Limits</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Max Videos Per Day</label>
          <input
            type="number"
            value={maxVideos}
            onChange={(e) => setMaxVideos(parseInt(e.target.value))}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            min="1"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Max Minutes Per Day</label>
          <input
            type="number"
            value={maxMinutes}
            onChange={(e) => setMaxMinutes(parseInt(e.target.value))}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            min="1"
          />
        </div>
        <button onClick={handleSave} className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition">
          Save Limits
        </button>
        <button onClick={resetDaily} className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition">
          Reset Today's Counter
        </button>
      </div>
    </div>
  );
};
