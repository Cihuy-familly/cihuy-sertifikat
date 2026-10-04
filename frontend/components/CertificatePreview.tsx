"use client";

interface CertificatePreviewProps {
  name: string;
  date: string;
  fontFamily: string;
  fontWeight: string;
  fontColor: string;
  fontSize: number;
}

export default function CertificatePreview({
  name,
  date,
  fontFamily,
  fontWeight,
  fontColor,
  fontSize,
}: CertificatePreviewProps) {
  const adjustedFontSize = fontSize / 4;

  return (
    <div
      className="border-2 border-purple-200 bg-gradient-to-br from-white via-purple-50 to-blue-50 shadow-2xl rounded-lg"
      style={{ width: 842, height: 595 }}
    >
      <div className="relative w-full h-full">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-10 left-10 text-7xl font-black rotate-[-30deg] text-purple-600">EXAMPLE</div>
          <div className="absolute top-40 left-40 text-7xl font-black rotate-[-30deg] text-blue-600">EXAMPLE</div>
          <div className="absolute top-20 right-20 text-7xl font-black rotate-[-30deg] text-yellow-600">EXAMPLE</div>
          <div className="absolute bottom-20 left-20 text-7xl font-black rotate-[-30deg] text-purple-600">EXAMPLE</div>
          <div className="absolute bottom-10 right-10 text-7xl font-black rotate-[-30deg] text-blue-600">EXAMPLE</div>
          <div className="absolute bottom-40 right-40 text-7xl font-black rotate-[-30deg] text-yellow-600">EXAMPLE</div>
        </div>

        <div className="relative z-10 flex flex-col items-center h-full p-8">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
              Logo
            </div>
            <span className="text-sm text-purple-700 font-medium">Logo Name</span>
          </div>

          <div className="w-96 border-t-2 border-gradient-to-r from-purple-400 via-blue-400 to-yellow-400 my-2" style={{borderImage: 'linear-gradient(to right, #a78bfa, #60a5fa, #fbbf24) 1'}} />

          <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-600 via-blue-600 to-yellow-500 bg-clip-text text-transparent">
            Title Of the Certifikat
          </h1>

          <p className="text-lg text-center mt-2 text-purple-600">Orgenizer</p>

          <div className="flex-1 flex items-center">
            <p
              className="text-center"
              style={{
                fontFamily,
                fontWeight: fontWeight === "Normal" ? 400 : 700,
                color: fontColor,
                fontSize: adjustedFontSize,
              }}
            >
              {name}
            </p>
          </div>

          <div className="w-96 border-t-2 my-2" style={{borderImage: 'linear-gradient(to right, #a78bfa, #60a5fa, #fbbf24) 1'}} />

          <p className="text-xl text-center text-purple-700">{date}</p>

          <div className="flex items-center gap-2 mt-2">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
              Logo
            </div>
            <span className="text-sm text-purple-700 font-medium">Logo Name</span>
          </div>
        </div>
      </div>
    </div>
  );
}
