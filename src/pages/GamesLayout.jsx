// src/components/GamesLayout.jsx
import React from "react";
import { Outlet, useLocation } from "react-router";
import GenreCard from "../components/GenreCard";
import {
  FaBolt,
  FaDragon,
  FaChessKnight,
  FaSpaceShuttle,
  FaFutbol,
} from "react-icons/fa";

const genres = [
  { id: "action", title: "Action", icon: <FaBolt size={24} /> },
  { id: "adventure", title: "Adventure", icon: <FaSpaceShuttle size={24} /> },
  { id: "rpg", title: "RPG", icon: <FaDragon size={24} /> },
  { id: "strategy", title: "Strategy", icon: <FaChessKnight size={24} /> },
  { id: "sports", title: "Sports", icon: <FaFutbol size={24} /> },
];

export default function GamesLayout() {
  const { pathname } = useLocation();
  const isIndex = pathname === "/games";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Render the child route (GamesPage or a specific genre page) */}
      <div className="flex-grow">
        <Outlet />
      </div>

      {/* Only show the bottom‐fixed genre picker on /games/:genre */}
      {!isIndex && (
        <nav className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-t z-50">
          <div className="container mx-auto px-4 py-3">
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
              {genres.map((g) => {
                const isActive = pathname.endsWith(`/${g.id}`);
                return (
                  <GenreCard
                    key={g.id}
                    to={`/games/${g.id}`}
                    icon={g.icon}
                    title={g.title}
                    isActive={isActive}
                  />
                );
              })}
            </div>
          </div>
        </nav>
      )}

      {/* Padding so content never hides beneath the fixed nav */}
      <div className="pb-20" />
    </div>
  );
}
