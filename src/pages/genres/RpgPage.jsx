// src/pages/genres/RpgPage.jsx
import React from "react";

export default function RpgPage() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        src="https://www.videvo.net/videvo_files/converted/2014_08/videos/medieval_lookaround.mp418843.webm"
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black/50 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">RPG</h1>
        <p className="max-w-xl text-lg text-gray-200">
          Deep stories, character progression, and immersive lore.
        </p>
      </div>
    </div>
  );
}
