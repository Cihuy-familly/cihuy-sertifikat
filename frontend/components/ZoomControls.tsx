"use client";

import { useState } from "react";

export default function ZoomControls() {
  const [zoom, setZoom] = useState(100);

  const handleZoomIn = () => setZoom(Math.min(zoom + 10, 200));
  const handleZoomOut = () => setZoom(Math.max(zoom - 10, 50));

  return (
    <div className="fixed bottom-4 right-4 flex items-center bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-purple-200">
      <button
        onClick={handleZoomOut}
        className="p-3 hover:bg-purple-50 rounded-l-2xl text-purple-600 transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
        </svg>
      </button>
      <div className="w-px h-8 bg-purple-200" />
      <button
        onClick={handleZoomIn}
        className="p-3 hover:bg-purple-50 rounded-r-2xl text-purple-600 transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
        </svg>
      </button>
    </div>
  );
}
