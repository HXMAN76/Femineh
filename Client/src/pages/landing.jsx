"use client";

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import RetroGrid from "@/components/ui/retro-grid";

const LandingPage = () => {
  return (
    <div className="h-screen w-screen relative overflow-hidden bg-gradient-to-b from-[#8B3C3C] to-[#4D2C2C]">
      {/* Upper Part with Sky Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#8B3C3C] to-transparent">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      </div>

      {/* Retro Grid Moving */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2">
        <RetroGrid
          className="w-full h-full"
          cellSize={60}
          angle={65}
          opacity={0.5}
          lightLineColor="#FFFFFF"
          darkLineColor="#DDDDDD"
        />
      </div>

      {/* Welcome Message */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="absolute top-12 w-full text-center"
      >
        <h1
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-[#FFFFFF] to-[#F0F0F0] text-transparent bg-clip-text tracking-wide"
        >
          WELCOME TO FEMINAE 
        </h1>
      </motion.div>

      {/* Quote */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 2 }}
        className="absolute top-28 mt-8 w-full text-center text-white text-lg sm:text-xl"
      >
        <p>"You are not alone. We are here for you."</p>
      </motion.div>

      {/* Interactive Buttons */}
      <div className="absolute bottom-8 left-8">
        {/* Login Button */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <Link to="/login">
            <button
              className="bg-gradient-to-r from-[#E57373] to-[#F06292] text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
            >
              Login
            </button>
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-8 right-8">
        {/* Signup Button */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2.8 }}
        >
          <Link to="/signup">
            <button
              className="bg-gradient-to-r from-[#E57373] to-[#F06292] text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
            >
              Signup
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
