// src/pages/AboutUs.jsx
import React from "react";
import { FaGamepad, FaUsers, FaBullseye, FaLightbulb } from "react-icons/fa";

export default function AboutUs() {
  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <div className="relative h-64 sm:h-80 md:h-96 bg-gradient-to-r from-blue-800 to-indigo-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <FaGamepad className="text-white text-5xl sm:text-6xl mb-4 animate-pulse" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            About GameScope
          </h1>
          <p className="mt-2 text-sm sm:text-base text-gray-200 max-w-2xl">
            Connecting gamers to the most thrilling experiences across every
            genre.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Our Story */}
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Our Story
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Founded by passionate gamers and developers, GameScope was born out
            of a desire to celebrate the artistry, innovation, and community
            that make video games a cultural force. From indie gems to AAA
            blockbusters, we cover it all.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Whether you're seeking in-depth genre guides, developer interviews,
            or the latest community highlights, GameScope is your one-stop hub
            for everything gaming.
          </p>
        </div>

        {/* Our Mission & Values */}
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <FaBullseye className="text-blue-600 text-2xl mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Focus on Quality
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We strive to deliver well-researched, insightful content that
                gamers can rely on.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <FaLightbulb className="text-yellow-500 text-2xl mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Innovative Coverage
              </h3>
              <p className="text-gray-600 leading-relaxed">
                From emerging VR titles to classic remasters, we spotlight
                innovation and creativity in every playthrough.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <FaUsers className="text-green-500 text-2xl mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Community Driven
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We believe the gamer community is at the heart of every great
                experience. Join our forums and events to make your voice heard.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-indigo-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Ready to Explore?
          </h2>
          <p className="text-gray-600 mb-6">
            Dive into our genre guides, watch epic trailers, and join a thriving
            community.
          </p>
          <a
            href="/games"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
          >
            Browse All Genres
          </a>
        </div>
      </div>
    </div>
  );
}
