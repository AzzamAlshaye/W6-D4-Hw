// src/pages/genres/SportsPage.jsx
import React from "react";
import Fifa from "../../assets/Fifa.gif";
export default function SportsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Video hero */}
      <div className="relative w-full  h-[50vh] sm:h-[60vh] md:h-[60vh] lg:h-[60]  overflow-hidden">
        <img
          src={Fifa}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-2">
            Sports
          </h1>
          <p className="max-w-xl text-sm sm:text-base md:text-lg text-gray-200">
            Competitive arenas—from the pitch to the racetrack.
          </p>
        </div>
      </div>

      {/* Fallback text/content */}
      <div className="container mx-auto px-4 py-8 text-gray-100">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
          About Sports Games
        </h2>
        <p className="text-sm sm:text-base leading-relaxed">
          Experience the thrill of victory and the agony of defeat in football,
          racing, basketball, and more.
        </p>
      </div>
    </div>
  );
}
