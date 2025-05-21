// src/pages/HomePage.jsx
import React from "react";
import { Link } from "react-router";
import {
  FaBolt,
  FaDragon,
  FaChessKnight,
  FaSpaceShuttle,
  FaFutbol,
} from "react-icons/fa";

const genres = [
  { id: "action", title: "Action", icon: <FaBolt size={32} /> },
  { id: "adventure", title: "Adventure", icon: <FaSpaceShuttle size={32} /> },
  { id: "rpg", title: "RPG", icon: <FaDragon size={32} /> },
  { id: "strategy", title: "Strategy", icon: <FaChessKnight size={32} /> },
  { id: "sports", title: "Sports", icon: <FaFutbol size={32} /> },
];

export default function HomePage() {
  return (
    <div className="flex flex-col items-center py-12 px-4 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Pick a Genre</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full max-w-6xl">
        {genres.map((g) => (
          <Link
            key={g.id}
            to={`/games/${g.id}`}
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow hover:shadow-lg transform hover:-translate-y-1 transition"
          >
            {g.icon}
            <span className="mt-3 text-lg font-semibold">{g.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
