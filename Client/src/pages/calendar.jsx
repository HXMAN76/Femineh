import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar } from "../components/ui/calendar"; // Correct path for Calendar component

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());
  const [activities, setActivities] = useState({
    "2024-12-28": ["Team meeting at 10 AM", "Project submission deadline"],
    "2024-12-29": ["Doctor's appointment at 3 PM"],
    // Add more activities here
  });

  const formattedDate = date.toISOString().split("T")[0]; // Format date as YYYY-MM-DD

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white p-4">
      <h1 className="text-3xl font-bold mb-4">Calendar</h1>
      <p className="text-lg mb-6">Select a date to see your schedule.</p>

      {/* Combined Calendar and Activities Section */}
      <div className="p-6 bg-black text-white rounded-lg shadow-md w-full max-w-4xl border border-gray-600 flex flex-col md:flex-row">
        {/* Calendar Component */}
        <div className="w-full md:w-1/2 p-4">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border border-gray-600"
          />
        </div>

        {/* Activities Section */}
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-xl font-semibold mb-2">Activities on {formattedDate}:</h2>
          {activities[formattedDate] ? (
            <ul className="list-disc list-inside">
              {activities[formattedDate].map((activity, index) => (
                <li key={index} className="text-gray-300">
                  {activity}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No activities planned for this day.</p>
          )}
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

export default CalendarPage;