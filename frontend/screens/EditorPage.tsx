"use client";

import { useState } from "react";
import EditorSidebar from "@/components/EditorSidebar";
import CertificatePreview from "@/components/CertificatePreview";
import ZoomControls from "@/components/ZoomControls";

export default function EditorPage() {
  const [fontFamily, setFontFamily] = useState("Inter");
  const [fontWeight, setFontWeight] = useState("Normal");
  const [fontColor, setFontColor] = useState("#1e1b4b");
  const [fontSize, setFontSize] = useState(100);
  const [selectedDate, setSelectedDate] = useState("31 Agustus 2026");
  const [names, setNames] = useState([
    "Alpa Alex Alah",
    "Beta Biti Bete",
    "Charlie Cecep",
    "Delta Donimo",
    "Echo Ecing",
  ]);
  const [selectedName, setSelectedName] = useState("");

  return (
    <div className="flex h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-yellow-50">
      <EditorSidebar
        fontFamily={fontFamily}
        setFontFamily={setFontFamily}
        fontWeight={fontWeight}
        setFontWeight={setFontWeight}
        fontColor={fontColor}
        setFontColor={setFontColor}
        fontSize={fontSize}
        setFontSize={setFontSize}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        names={names}
        setNames={setNames}
        selectedName={selectedName}
        setSelectedName={setSelectedName}
      />
      <main className="flex-1 flex flex-col items-center justify-center relative">
        <CertificatePreview
          name={selectedName || "Names Place Holder"}
          date={selectedDate}
          fontFamily={fontFamily}
          fontWeight={fontWeight}
          fontColor={fontColor}
          fontSize={fontSize}
        />
        <ZoomControls />
      </main>
    </div>
  );
}
