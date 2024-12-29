import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/image.png";
import Ripple from "../components/ui/ripple";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/landing");
    }, 5173); // Timeout for 5.173 seconds
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen w-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Logo */}
      <img src={logo} alt="Feminae Logo" className="w-36 h-auto mb-8 z-10" />
      
      {/* Ripples */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Ripple className="text-white opacity-50" /> {/* Customize ripple for white color */}
      </div>
    </div>
  );
};

export default SplashScreen;
