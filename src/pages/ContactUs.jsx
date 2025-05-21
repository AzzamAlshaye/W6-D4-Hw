// src/pages/ContactUs.jsx
import React from "react";

export default function ContactUs() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-md">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">Name</label>
          <input type="text" className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Email</label>
          <input type="email" className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Message</label>
          <textarea className="w-full border rounded p-2 h-32" />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Send
        </button>
      </form>
    </div>
  );
}
