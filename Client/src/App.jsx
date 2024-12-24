import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./pages/Load_Landing";
import LandingPage from "./pages/landing";
import Login from "./pages/login";
import Signup from "./pages/signup"
import HomePage from "./pages/homepage";  
import CalendarPage from "./pages/calender";
import ChatPage from "./pages/chatpage";
import ProfilePage from "./pages/profile";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/Landing" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/calender" element={<CalendarPage />} />
        <Route path="/chatpage" element={<ChatPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
