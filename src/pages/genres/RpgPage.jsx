// src/pages/genres/RpgPage.jsx
import React from "react";
import BG3 from "../../assets/BG3.gif";

export default function RpgPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Video hero */}
      <div className="relative w-full  h-[50vh] sm:h-[60vh] md:h-[60vh] lg:h-[60vh] overflow-hidden">
        <img
          src={BG3}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-2">
            RPG
          </h1>
          <p className="max-w-xl text-sm sm:text-base md:text-lg text-gray-200">
            Deep stories, character progression, and immersive lore.
          </p>
        </div>
      </div>

      {/* Fallback text/content */}
      <div className="container mx-auto px-4 py-8 text-gray-100">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">About RPGs</h2>
        <p className="text-sm sm:text-base leading-relaxed">
          Customize your hero, forge alliances, and shape a narrative that’s
          uniquely yours in these sprawling worlds.
        </p>
      </div>
    </div>
  );
}
