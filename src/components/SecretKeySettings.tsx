import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const SecretKeySettings: React.FC = () => {
  const { secretKey, updateSecretKey } = useApp();
  
  // Provide fallback values in case secretKey is undefined
  const [key, setKey] = useState(secretKey?.key || 'F2');
  const [ctrl, setCtrl] = useState(secretKey?.ctrl ?? true);
  const [alt, setAlt] = useState(secretKey?.alt ?? false);
  const [shift, setShift] = useState(secretKey?.shift ?? false);


  const handleSave = () => {
    updateSecretKey({ key, ctrl, alt, shift });
    alert('Secret key updated successfully!');
  };

  const getKeyCombo = () => {
    const modifiers = [];
    if (ctrl) modifiers.push('Ctrl');
    if (alt) modifiers.push('Alt');
    if (shift) modifiers.push('Shift');
    modifiers.push(key);
    return modifiers.join(' + ');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">🔐 Mouse Unlock Key</h3>
      <p className="text-sm text-gray-600 mb-4">
        Set the secret key combination to unlock mouse during video playback
      </p>
      
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Key</label>
          <select
            value={key}
            onChange={(e) => setKey(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="F1">F1</option>
            <option value="F2">F2</option>
            <option value="F3">F3</option>
            <option value="F4">F4</option>
            <option value="F5">F5</option>
            <option value="F6">F6</option>
            <option value="F7">F7</option>
            <option value="F8">F8</option>
            <option value="F9">F9</option>
            <option value="F10">F10</option>
            <option value="F11">F11</option>
            <option value="F12">F12</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={ctrl}
              onChange={(e) => setCtrl(e.target.checked)}
              className="w-4 h-4"
            />
            <span className="text-gray-700">Ctrl</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={alt}
              onChange={(e) => setAlt(e.target.checked)}
              className="w-4 h-4"
            />
            <span className="text-gray-700">Alt</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={shift}
              onChange={(e) => setShift(e.target.checked)}
              className="w-4 h-4"
            />
            <span className="text-gray-700">Shift</span>
          </label>
        </div>

        <div className="bg-blue-50 p-3 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>Current combination:</strong> {getKeyCombo()}
          </p>
        </div>

        <button 
          onClick={handleSave} 
          className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition"
        >
          Save Secret Key
        </button>
      </div>
    </div>
  );
};
