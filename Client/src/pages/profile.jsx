import React from "react";
import { Link } from "react-router-dom";
import MeteorEffect from "@/components/ui/meteors";

const ProfilePage = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden text-white">
      {/* Meteor Effect */}
      <div className="absolute inset-0 z-0">
        <MeteorEffect />
      </div>

      {/* Profile Section */}
      <div className="relative z-10 flex flex-col items-center md:flex-row md:items-start p-6 md:p-8 gap-6 w-11/12 max-w-4xl">
        {/* Profile Info Sidebar */}
        <div className="w-full md:w-1/3 bg-gradient-to-b from-[#333333] to-[#4D4D4D] p-6 rounded-lg shadow-lg text-white">
          <h1 className="text-2xl font-bold">Profile Information</h1>
          <p className="mt-2">
            Manage your personal details and preferences here.
          </p>
        </div>

        {/* Profile Details Section */}
        <div className="flex-1 bg-gradient-to-b from-[#1A1A1A] to-[#2A2A2A] p-6 rounded-lg shadow-lg border border-gray-600 text-white">
          <h2 className="text-xl font-semibold mb-4">Your Details</h2>
          <ul className="space-y-2">
            <li>
              <strong>Name:</strong> Priya Sharma
            </li>
            <li>
              <strong>Email:</strong> priya@example.com
            </li>
            <li>
              <strong>Phone:</strong> +91-9876543210
            </li>
            <li>
              <strong>Blood Group:</strong> B+
            </li>
            <li>
              <strong>Dietary Preferences:</strong> Vegetarian
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-black py-3 shadow-md flex justify-around border-t border-gray-700">
        <Link
          to="/homepage"
          className="text-center text-gray-400 hover:text-white transition"
        >
          <div>🏠</div>
          <span className="text-xs">Home</span>
        </Link>
        <Link
          to="/chatpage"
          className="text-center text-gray-400 hover:text-white transition"
        >
          <div>🤖</div>
          <span className="text-xs">AI Chat</span>
        </Link>
        <Link
          to="/calendar"
          className="text-center text-gray-400 hover:text-white transition"
        >
          <div>📅</div>
          <span className="text-xs">Calendar</span>
        </Link>
        <Link
          to="/profile"
          className="text-center text-gray-400 hover:text-white transition"
        >
          <div>👤</div>
          <span className="text-xs">Profile</span>
        </Link>
      </nav>
    </div>
  );
};

export default ProfilePage;
