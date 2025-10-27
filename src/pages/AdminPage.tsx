import React, { useState } from 'react';
import { AdminLogin } from '../components/AdminLogin';
import { AddVideoForm } from '../components/AddVideoForm';
import { VideoList } from '../components/VideoList';
import { LimitSettings } from '../components/LimitSettings';
import { SecretKeySettings } from '../components/SecretKeySettings';
import { WatchHistory } from '../components/WatchHistory';
import { AdminDashboard } from '../components/AdminDashboard';
import { Footer } from '../components/Footer';
import { useApp } from '../context/AppContext';




export const AdminPage: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { todayWatched, dailyLimits } = useApp();

  if (!isLoggedIn) {
    return <AdminLogin onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">👨‍👩‍👧 Parent Dashboard</h1>
              <p className="text-gray-600">Manage videos and viewing limits</p>
            </div>
            <button
              onClick={() => setIsLoggedIn(false)}
              className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        </div>

        <AdminDashboard />


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <AddVideoForm />
            <LimitSettings />
            <SecretKeySettings />
          </div>

          <div className="space-y-6">
            <VideoList />
            <WatchHistory />
          </div>
        </div>

        <Footer />
      </div>

    </div>
  );
};
