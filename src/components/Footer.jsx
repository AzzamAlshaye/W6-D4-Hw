// src/components/Footer.jsx
import React from "react";
import { FaTwitter, FaDiscord, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-4">
        <p className="text-sm">&copy; 2025 GameScope. All rights reserved.</p>
        <div className="flex space-x-4 text-xl">
          <a href="#" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="#" aria-label="Discord">
            <FaDiscord />
          </a>
          <a href="#" aria-label="GitHub">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}
