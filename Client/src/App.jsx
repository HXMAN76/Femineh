import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./pages/Load_Landing";
import LandingPage from "./pages/landing";
import Login from "./pages/login";
import Signup from "./pages/signup"
import HomePage from "./pages/homepage";  
import CalendarPage from "./pages/calendar";
import ChatPage from "./pages/chatpage";
import ProfilePage from "./pages/profile";
import FormsPage from "./pages/formspage";
import Therapy from "./pages/therapy";
import Audio from "./pages/audio";
import Book from "./pages/book";
import Laugh from "./pages/laugh";
import Child from "./pages/child";
import Yoga from "./pages/yoga"
import Alone from "./pages/alone"
import CommunityPage from "./pages/CommunityPage";
import DocDash from './pages/DocDash';

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
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/chatpage" element={<ChatPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/formspage" element={<FormsPage />} />
        <Route path="/therapy" element={<Therapy />} />
        <Route path="/audio" element={<Audio />} />
        <Route path="/book" element={<Book />} />
        <Route path="/laugh" element={<Laugh />} />
        <Route path="/child" element={<Child />} />
        <Route path="/yoga" element={<Yoga />} />
        <Route path="/alone" element={<Alone />} />
        <Route path="/CommunityPage" element={<CommunityPage />} />
        <Route path="/docdash" element={<DocDash />} />
      </Routes>
    </Router>
  );
}

export default App;
