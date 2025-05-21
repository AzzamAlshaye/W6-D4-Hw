// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router";
import { FaGamepad } from "react-icons/fa";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md ${
      isActive ? "bg-white text-gray-800" : "text-white hover:bg-white/20"
    }`;

  return (
    <nav className="bg-gray-900 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-2">
          <FaGamepad size={24} />
          <span className="font-bold text-lg">GameScope</span>
        </div>
        <div className="space-x-2">
          <Link to="/" className={linkClass}>
            Home
          </Link>
          <Link to="/games" className={linkClass}>
            Games
          </Link>
          <Link to="/about" className={linkClass}>
            About
          </Link>
          <Link to="/contact" className={linkClass}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
