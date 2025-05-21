// src/pages/genres/StrategyPage.jsx
import React from "react";

export default function StrategyPage() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        src="https://www.videvo.net/videvo_files/converted/2016_01/videos/160112_01_Wargame_Battlefield_1080p.mp462817.webm"
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black/50 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Strategy
        </h1>
        <p className="max-w-xl text-lg text-gray-200">
          Plan your moves, command armies, and outthink your rivals.
        </p>
      </div>
    </div>
  );
}
