// src/pages/genres/ActionPage.jsx
import React from "react";
import GoW from "../../assets/GoW.gif";

export default function ActionPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Video hero */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[60vh] lg:h-[60vh] overflow-hidden">
        <img
          src={GoW}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-2">
            Action
          </h1>
          <p className="max-w-xl text-sm sm:text-base md:text-lg text-gray-200">
            High-octane combat and adrenaline-fuelled gameplay.
          </p>
        </div>
      </div>

      {/* Fallback text/content */}
      <div className="container mx-auto px-4 py-8 text-gray-100">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
          About Action Games
        </h2>
        <p className="text-sm sm:text-base leading-relaxed">
          From run-and-gun shooters to beat-’em-ups, action games throw you into
          frenetic battles where reflexes matter most.
        </p>
      </div>
    </div>
  );
}
