// src/components/GenreCard.jsx
import React from "react";
import { Link } from "react-router";

export default function GenreCard({ to, icon, title, isActive }) {
  const base = "flex flex-col items-center p-4 rounded-lg transition-transform";
  const active = "bg-blue-500 text-white scale-110 ring-4 ring-blue-400";
  const inactive =
    "bg-white/90 text-gray-800 backdrop-blur-sm hover:bg-gray-200 hover:scale-105";

  return (
    <Link to={to} className={`${base} ${isActive ? active : inactive}`}>
      {icon}
      <span className="mt-2 font-semibold">{title}</span>
    </Link>
  );
}
