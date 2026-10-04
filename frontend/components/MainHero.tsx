"use client";

import { useState } from "react";

interface MainHeroProps {
  isLoggedIn: boolean;
  onLoginClick: () => void;
}

export default function MainHero({ isLoggedIn, onLoginClick }: MainHeroProps) {
  const [fileName, setFileName] = useState("");
  const [recentFiles] = useState([
    "File Certificate A",
    "File Certificate B",
    "File Certificate C",
    "File Certificate D",
  ]);

  const handleCreateFile = () => {
    if (!isLoggedIn) {
      onLoginClick();
      return;
    }
    if (fileName.trim()) {
      window.location.href = `/editor?file=${encodeURIComponent(fileName)}`;
    }
  };

  const handleImportFile = () => {
    if (!isLoggedIn) {
      onLoginClick();
      return;
    }
    alert("Import functionality - dummy");
  };

  const handleOpenRecentFile = (file: string) => {
    if (!isLoggedIn) {
      onLoginClick();
      return;
    }
    window.location.href = `/editor?file=${encodeURIComponent(file)}`;
  };

  return (
    <div className="flex-1 flex items-center justify-center p-8">
      <div className="w-full max-w-4xl bg-white/70 backdrop-blur-sm border border-purple-200 rounded-3xl p-8 shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-yellow-500 bg-clip-text text-transparent">
          Hello and welcome To Certifikat Editor
        </h2>
        <p className="text-center text-purple-700 mb-8">
          Create beautiful certificates with ease. Design, customize, and export professional certificates in minutes.
        </p>

        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-100">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-purple-900 flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5z" clipRule="evenodd" />
                </svg>
                Recent File
              </h3>
              <ul className="space-y-2">
                {recentFiles.map((file) => (
                  <li
                    key={file}
                    onClick={() => handleOpenRecentFile(file)}
                    className="flex items-center gap-2 cursor-pointer hover:text-purple-600 transition-colors p-2 rounded-lg hover:bg-white/50"
                  >
                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                    </svg>
                    <span className="text-sm text-purple-800">{file}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-l border-purple-200 pl-6">
              <h3 className="font-semibold mb-3 text-purple-900 flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                New File
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={fileName}
                    onChange={(e) => setFileName(e.target.value)}
                    placeholder="File name"
                    className="flex-1 border border-purple-200 rounded-xl px-4 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-300"
                  />
                </div>
                <div className="text-xs text-purple-500">
                  File: /import/file/name/file/type
                </div>
                <button
                  onClick={handleImportFile}
                  className="w-full bg-white border border-purple-200 rounded-xl px-3 py-2 text-xs font-medium flex items-center justify-center gap-2 hover:bg-purple-50 text-purple-700 transition-all"
                >
                  <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Import Plain Certificat
                </button>
                <button
                  onClick={handleCreateFile}
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-xl px-3 py-2 text-xs font-medium flex items-center justify-center gap-2 shadow-lg shadow-purple-200 transition-all"
                >
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  Create File
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
