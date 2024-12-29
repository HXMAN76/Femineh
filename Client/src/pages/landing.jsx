"use client";

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"; // Shadcn button
import RetroGrid from "@/components/ui/retro-grid"; // Import RetroGrid component

const LandingPage = () => {
  return (
    <div className="h-screen w-screen bg-black relative overflow-hidden">
      {/* Background Stars */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      </div>

      {/* Retro Grid */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2">
        <RetroGrid
          className="w-full h-full"
          cellSize={60}
          angle={65}
          opacity={0.5}
          lightLineColor="#FFFFFF"
          darkLineColor="#444444"
        />
      </div>

      {/* Centered Magic UI Styled Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-start pt-24">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-white text-4xl sm:text-6xl md:text-7xl font-bold tracking-wide text-center"
        >
          WELCOME
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-white text-4xl sm:text-6xl md:text-7xl font-bold tracking-wide text-center"
        >
          TO
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-white text-4xl sm:text-6xl md:text-7xl font-bold tracking-wide text-center"
        >
          FEMINAE
        </motion.h1>
      </div>

      {/* Interactive Buttons */}
      <div className="absolute bottom-8 left-8">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <Link to="/login">
            <Button className="bg-white text-black font-bold py-3 px-6 rounded-md shadow-lg hover:bg-gray-300">
              Login
            </Button>
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-8 right-8">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <Link to="/signup">
            <Button className="bg-white text-black font-bold py-3 px-6 rounded-md shadow-lg hover:bg-gray-300">
              Signup
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
