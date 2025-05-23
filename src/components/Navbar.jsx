// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import { FaGamepad } from "react-icons/fa";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const linkClass = (path) =>
    `block px-6 py-3 font-medium rounded-md transition
     ${
       pathname === path
         ? "bg-white text-gray-900"
         : "text-white hover:bg-gray-700"
     }`;

  return (
    <nav className="bg-gray-900 text-white shadow-md relative">
      <div className="container mx-auto flex items-center justify-between lg:justify-normal lg:gap-10 p-4">
        {/* Brand */}
        <Link to="/" className="flex items-center space-x-2">
          <FaGamepad className="text-2xl" />
          <span className="text-xl font-bold">GameScope</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex space-x-4">
          <Link to="/" className={linkClass("/")}>
            Home
          </Link>
          <Link to="/games" className={linkClass("/games")}>
            Games
          </Link>
          <Link to="/about" className={linkClass("/about")}>
            About
          </Link>
          <Link to="/contact" className={linkClass("/contact")}>
            Contact
          </Link>
        </div>

        {/* Burger button */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="lg:hidden text-white focus:outline-none"
        >
          {menuOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden bg-gray-900 overflow-hidden transition-[max-height] duration-300
          ${menuOpen ? "max-h-screen" : "max-h-0"}`}
      >
        <ul className="flex flex-col">
          <li>
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className={linkClass("/")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/games"
              onClick={() => setMenuOpen(false)}
              className={linkClass("/games")}
            >
              Games
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className={linkClass("/about")}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className={linkClass("/contact")}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
