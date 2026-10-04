"use client";

import { useState } from "react";

interface EditorSidebarProps {
  fontFamily: string;
  setFontFamily: (value: string) => void;
  fontWeight: string;
  setFontWeight: (value: string) => void;
  fontColor: string;
  setFontColor: (value: string) => void;
  fontSize: number;
  setFontSize: (value: number) => void;
  selectedDate: string;
  setSelectedDate: (value: string) => void;
  names: string[];
  setNames: (value: string[]) => void;
  selectedName: string;
  setSelectedName: (value: string) => void;
}

export default function EditorSidebar({
  fontFamily,
  setFontFamily,
  fontWeight,
  setFontWeight,
  fontColor,
  setFontColor,
  fontSize,
  setFontSize,
  selectedDate,
  setSelectedDate,
  names,
  setNames,
  selectedName,
  setSelectedName,
}: EditorSidebarProps) {
  const [newName, setNewName] = useState("");

  const handleAddName = () => {
    if (newName.trim()) {
      setNames([...names, newName.trim()]);
      setNewName("");
    }
  };

  const handleExport = () => {
    alert(`Exporting certificate for: ${selectedName || "No name selected"}`);
  };

  return (
    <aside className="w-96 bg-gradient-to-b from-purple-100 to-blue-100 p-4 flex flex-col overflow-y-auto border-r border-purple-200">
      <div className="mb-6">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Certifikat Editor
        </h1>
        <p className="text-xs text-purple-500">v 0.0.0</p>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium mb-2 text-purple-900">Font</label>
        <div className="flex gap-2 mb-2">
          <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-xl px-3 py-2 flex items-center gap-2 border border-purple-100">
            <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
            </svg>
            <span className="font-bold text-purple-900">{fontFamily}</span>
          </div>
          <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-xl px-3 py-2 flex items-center justify-center border border-purple-100">
            <span className="font-bold text-purple-900">{fontWeight}</span>
          </div>
        </div>
        <div className="bg-white/80 backdrop-blur-sm rounded-xl px-3 py-2 flex items-center gap-3 border border-purple-100">
          <input
            type="color"
            value={fontColor}
            onChange={(e) => setFontColor(e.target.value)}
            className="w-6 h-6 rounded cursor-pointer"
          />
          <span className="text-sm text-purple-700">{fontColor}</span>
          <div className="flex-1" />
          <input
            type="number"
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
            className="w-12 text-right text-sm text-purple-900"
          />
          <span className="text-sm text-purple-500">%</span>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium mb-2 text-purple-900">Name List</label>
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 max-h-48 overflow-y-auto border border-purple-100">
          <ul className="space-y-1">
            {names.map((name, index) => (
              <li
                key={index}
                onClick={() => setSelectedName(name)}
                className={`cursor-pointer px-3 py-2 rounded-lg transition-all ${
                  selectedName === name
                    ? "bg-gradient-to-r from-purple-200 to-blue-200 text-purple-900 font-medium"
                    : "hover:bg-purple-50 text-purple-700"
                }`}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-2 mt-2">
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Add new name"
            className="flex-1 bg-white/80 backdrop-blur-sm rounded-xl px-3 py-2 text-sm border border-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
          <button
            onClick={handleAddName}
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-xl px-4 py-2 text-sm font-medium transition-all"
          >
            Add
          </button>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium mb-2 text-purple-900">Date</label>
        <div className="bg-white/80 backdrop-blur-sm rounded-xl px-3 py-2 flex items-center gap-2 border border-purple-100">
          <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <input
            type="text"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="flex-1 text-sm text-purple-900 bg-transparent"
          />
        </div>
      </div>

      <div className="mt-auto">
        <button
          onClick={handleExport}
          className="w-full bg-gradient-to-r from-purple-500 via-blue-500 to-yellow-500 hover:from-purple-600 hover:via-blue-600 hover:to-yellow-600 text-white rounded-xl px-4 py-3 font-medium flex items-center justify-center gap-2 shadow-lg shadow-purple-200 transition-all"
        >
          Export to
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </aside>
  );
}
