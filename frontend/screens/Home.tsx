"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import MainHero from "@/components/MainHero";
import AuthPopup from "@/components/AuthPopup";
import ZoomControls from "@/components/ZoomControls";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAuthPopup, setShowAuthPopup] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowAuthPopup(false);
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-yellow-50">
      <Sidebar isLoggedIn={isLoggedIn} />
      <main className="flex-1 flex flex-col">
        <div className="flex justify-end p-4">
          {isLoggedIn ? (
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg border border-purple-200">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                U
              </div>
              <div>
                <p className="text-sm font-semibold text-purple-900">User Name</p>
                <p className="text-xs text-purple-500">Google account</p>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setShowAuthPopup(true)}
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-2xl px-6 py-3 text-sm font-semibold shadow-lg shadow-purple-200 transition-all"
            >
              Sign In
            </button>
          )}
        </div>
        <MainHero isLoggedIn={isLoggedIn} onLoginClick={() => setShowAuthPopup(true)} />
        <ZoomControls />
      </main>

      {showAuthPopup && !isLoggedIn && (
        <AuthPopup onLogin={handleLogin} onClose={() => setShowAuthPopup(false)} />
      )}
    </div>
  );
}
