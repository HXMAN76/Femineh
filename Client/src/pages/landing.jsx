"use client";

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
<<<<<<< HEAD
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
=======
import RetroGrid from "@/components/ui/retro-grid";
import modelsImage from "../assets/models.png"; // Import the image directly

const LandingPage = () => {
  return (
    <div className="h-screen w-screen relative overflow-hidden bg-gradient-to-b from-[#e7a2b5] to-[#e7a2b5]">
      {/* Upper Part with Sky Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#e7a2b5] to-transparent">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      </div>
      <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="flex justify-center items-center"
        >
          <img
            src={modelsImage}
            alt="Models"
            className="mx-auto w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8" // Responsive width
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="absolute w-full text-center flex justify-center items-center"
        >
          <h1
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#526ea7] to-[#000000] text-transparent bg-clip-text tracking-wide"
          >
            WELCOME TO FEMINAE
          </h1>
>>>>>>> main
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2">
          <RetroGrid
            className="w-full h-full"
            cellSize={55}
            angle={45}
            opacity={0.8}
            lightLineColor="#131010"
            darkLineColor="#DDDDDD"
          />
        </div>
       
        {/* Interactive Buttons */}
      <div className="absolute bottom-40 left-0 right-0 flex justify-center">
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <Link to="/login">
              <button
                className="bg-pink-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-pink-600 hover:scale-105 transition-all duration-300 w-40"
              >
                Login
              </button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <Link to="/signup">
              <button
                className="bg-pink-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-pink-600 hover:scale-105 transition-all duration-300 w-40"
              >
                Signup
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
