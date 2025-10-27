import React, { useState } from 'react';
import { AppProvider } from '../context/AppContext';
import { KidsPage } from '../pages/KidsPage';
import { AdminPage } from '../pages/AdminPage';

const AppLayout: React.FC = () => {
  const [view, setView] = useState<'kids' | 'admin'>('kids');

  return (
    <AppProvider>
      <div className="relative min-h-screen">
        {/* Navigation Toggle */}
        <div className="fixed top-4 right-4 z-50 flex gap-2">
          <button
            onClick={() => setView('kids')}
            className={`px-6 py-3 rounded-lg font-bold shadow-lg transition ${
              view === 'kids'
                ? 'bg-gradient-to-r from-yellow-400 to-pink-400 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            👶 Kids Mode
          </button>
          <button
            onClick={() => setView('admin')}
            className={`px-6 py-3 rounded-lg font-bold shadow-lg transition ${
              view === 'admin'
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            👨‍👩‍👧 Parent Mode
          </button>
        </div>

        {/* Content */}
        {view === 'kids' ? <KidsPage /> : <AdminPage />}
      </div>
    </AppProvider>
  );
};

export default AppLayout;
