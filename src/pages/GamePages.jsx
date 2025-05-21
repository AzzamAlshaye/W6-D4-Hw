// src/pages/GamesPage.jsx
import React from "react";
import { FaStar } from "react-icons/fa";
import GoW from "../assets/GoW.gif";
import RedDead2 from "../assets/RDR2.gif";
import BaldursGate3 from "../assets/BG3.gif";
import CnC from "../assets/C&C.gif";
import Fifa from "../assets/Fifa.gif";

const games = [
  {
    id: 1,
    title: "God of War",
    genre: "Action",
    img: GoW,
    rating: 4.9,
  },
  {
    id: 2,
    title: "Red Dead Redemption 2",
    genre: "Action-Adventure",
    img: RedDead2,
    rating: 4.8,
  },
  {
    id: 3,
    title: "Baldur’s Gate 3",
    genre: "RPG",
    img: BaldursGate3,
    rating: 4.7,
  },
  {
    id: 4,
    title: "Command & Conquer",
    genre: "Strategy",
    img: CnC,
    rating: 4.5,
  },
  {
    id: 5,
    title: "FIFA 24",
    genre: "Sports",
    img: Fifa,
    rating: 4.3,
  },
];

export default function GamesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-6">All Games</h2>
      <p className="text-gray-600 mb-8">
        Browse our hand-picked selection of top titles. Click a card for
        details!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {games.map((game) => (
          <div
            key={game.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img
              src={game.img}
              alt={game.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">{game.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{game.genre}</p>
              <div className="flex items-center">
                <FaStar className="text-yellow-400" />
                <span className="ml-1 text-gray-700">{game.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
