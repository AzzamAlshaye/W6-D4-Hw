// src/pages/genres/ActionPage.jsx
import React from "react";

export default function ActionPage() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        src="https://www.videvo.net/videvo_files/converted/2016_08/videos/160727_04_SportsVolleyball_1080p.mp463493.webm"
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black/50 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Action
        </h1>
        <p className="max-w-xl text-lg text-gray-200">
          High-octane combat and adrenaline-fuelled gameplay.
        </p>
      </div>
    </div>
  );
}
