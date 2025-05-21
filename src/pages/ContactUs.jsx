// src/pages/ContactUs.jsx
import React from "react";
import { FaUser, FaEnvelope, FaComment, FaPaperPlane } from "react-icons/fa";

export default function ContactUs() {
  return (
    <div className="flex flex-col items-center bg-gray-50 min-h-screen py-12 px-4">
      {/* Hero banner */}
      <div className="w-full max-w-xl mb-8 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-2">
          Get in Touch
        </h2>
        <p className="text-gray-600">
          Have questions or feedback? We’d love to hear from you.
        </p>
      </div>

      {/* Form card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <form className="space-y-6">
          {/* Name */}
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Your Name"
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Message */}
          <div className="relative">
            <FaComment className="absolute left-3 top-4 text-gray-400" />
            <textarea
              placeholder="Your Message"
              className="w-full pl-10 pr-4 py-3 h-32 border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition"
          >
            <FaPaperPlane />
            <span>Send Message</span>
          </button>
        </form>
      </div>
    </div>
  );
}
