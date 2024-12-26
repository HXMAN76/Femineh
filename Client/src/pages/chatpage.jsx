import React from "react";
import { Link } from "react-router-dom";

const ChatPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#8B3C3C] to-[#4D2C2C] flex flex-col items-center justify-center text-white">
      <h1 className="text-3xl font-bold mb-4">AI Chat</h1>
      <p className="text-lg">Interact with the AI assistant here!</p>

      <div className="mt-6 p-6 bg-white text-black rounded-lg shadow-md w-11/12 max-w-2xl">
        <p className="text-gray-700 text-center">
          The AI chat interface will go here.
        </p>
      </div>
      <nav className="fixed bottom-0 left-0 right-0 bg-white py-3 shadow-md flex justify-around">
        <Link
          to="/homepage"
          className="text-center text-gray-700 hover:text-[#8B3C3C] transition"
        >
          <div>🏠</div>
          <span className="text-xs">Home</span>
        </Link>
        <Link
          to="/chatpage"
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

export default ChatPage;