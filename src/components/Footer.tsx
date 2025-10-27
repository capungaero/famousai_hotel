import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white bg-opacity-90 backdrop-blur-sm mt-12 py-8 rounded-t-3xl shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">🎬 Kids Video Player</h3>
            <p className="text-gray-600">Safe, fun, and parent-controlled video watching for children.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-3">Features</h4>
            <ul className="space-y-2 text-gray-600">
              <li>✓ Parent-approved content</li>
              <li>✓ Daily time limits</li>
              <li>✓ Watch history tracking</li>
              <li>✓ Safe YouTube playback</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-3">Quick Tips</h4>
            <ul className="space-y-2 text-gray-600">
              <li>🔐 Parent password: parent123</li>
              <li>⏰ Set daily limits in admin</li>
              <li>📹 Add videos via YouTube URL</li>
              <li>🔄 Reset counters anytime</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-6 text-center text-gray-600">
          <p>Made with ❤️ for safe kids entertainment • © 2025</p>
        </div>
      </div>
    </footer>
  );
};
