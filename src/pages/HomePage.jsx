// src/pages/HomePage.jsx
import React from "react";
import { useLocation } from "react-router";
import GenreCard from "../components/GenreCard";
import gameGenres from "../assets/game-genres.jpg";
import {
  FaBolt,
  FaDragon,
  FaChessKnight,
  FaSpaceShuttle,
  FaFutbol,
} from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";

const genres = [
  { id: "action", title: "Action", icon: <FaBolt size={32} /> },
  { id: "adventure", title: "Adventure", icon: <FaSpaceShuttle size={32} /> },
  { id: "rpg", title: "RPG", icon: <FaDragon size={32} /> },
  { id: "strategy", title: "Strategy", icon: <FaChessKnight size={32} /> },
  { id: "sports", title: "Sports", icon: <FaFutbol size={32} /> },
];

export default function HomePage() {
  const { pathname } = useLocation();
  const current = pathname.split("/")[2] || "";

  const scrollToGenres = () => {
    const el = document.getElementById("genres");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Hero */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen overflow-hidden">
        <img
          src={gameGenres}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Entire text block is now a button */}
        <button
          type="button"
          onClick={scrollToGenres}
          className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4 cursor-pointer focus:outline-none"
          aria-label="Scroll to genres"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
            Pick Your Genre
          </h1>
          <p className="max-w-2xl text-sm sm:text-base md:text-lg text-gray-200">
            Click on any genre below to dive into a cinematic experience.
          </p>
          {/* Arrow, still only visible on lg+ */}
          <IoChevronDown className="hidden lg:block mt-6 text-white text-4xl animate-bounce" />
        </button>
      </div>

      {/* Cards grid */}
      <div id="genres" className="container mx-auto px-4 py-8 scroll-mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {genres.map((g) => (
            <GenreCard
              key={g.id}
              to={`/games/${g.id}`}
              icon={g.icon}
              title={g.title}
              isActive={current === g.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
