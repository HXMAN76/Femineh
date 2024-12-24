"use client";

import React from "react";
import { Link } from "react-router-dom";
import MeteorEffect from "@/components/ui/meteors";

const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#8B3C3C] to-[#4D2C2C] overflow-hidden">
      {/* Meteor Effect */}
      <div className="absolute inset-0 z-0">
        <MeteorEffect />
      </div>

      {/* Summary Section */}
      <div className="relative z-10 flex flex-col items-center md:flex-row md:items-start p-4 md:p-8 gap-4">
        {/* Sidebar */}
        <div className="w-full md:w-1/3 bg-gradient-to-b from-[#8B3C3C] to-[#B76E6E] p-6 rounded-lg shadow-lg text-white">
          <h1 className="text-2xl font-bold">Summary</h1>
          <p className="mt-2">
            Welcome to your personalized dashboard!
          </p>
        </div>

        {/* Content Section */}
        
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white py-3 shadow-md flex justify-around">
        <Link
          to="/"
          className="text-center text-gray-700 hover:text-[#8B3C3C] transition"
        >
          <div>🏠</div>
          <span className="text-xs">Home</span>
        </Link>
        <Link
          to="/ai-chat"
          className="text-center text-gray-700 hover:text-[#8B3C3C] transition"
        >
          <div>🤖</div>
          <span className="text-xs">AI Chat</span>
        </Link>
        <Link
          to="/calendar"
          className="text-center text-gray-700 hover:text-[#8B3C3C] transition"
        >
          <div>📅</div>
          <span className="text-xs">Calendar</span>
        </Link>
        <Link
          to="/profile"
          className="text-center text-gray-700 hover:text-[#8B3C3C] transition"
        >
          <div>👤</div>
          <span className="text-xs">Profile</span>
        </Link>
      </nav>
    </div>
  );
};

export default HomePage;
