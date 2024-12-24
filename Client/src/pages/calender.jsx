import React from "react";

const CalendarPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#8B3C3C] to-[#4D2C2C] flex flex-col items-center justify-center text-white">
      <h1 className="text-3xl font-bold mb-4">Calendar</h1>
      <p className="text-lg">Manage your schedule and events here!</p>

      <div className="mt-6 p-6 bg-white text-black rounded-lg shadow-md w-11/12 max-w-2xl">
        <p className="text-gray-700 text-center">Calendar view will go here.</p>
      </div>
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

export default CalendarPage;
