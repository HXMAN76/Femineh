"use client";

import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TextAnimate } from "@/components/ui/text-animate";
import Chatpng from "../assets/chatbot.png";
import Therapypng from "../assets/music.png";
import { Calendar } from "@/components/ui/calendar";
import { WarpBackground } from "@/components/ui/warp-background";
import { User } from 'lucide-react'; // Import the User icon

const HomePage = () => {
  const [date, setDate] = useState(new Date());
  const handleEraseAllData = () => {
    if (window.confirm("Are you sure you want to erase all data? This action cannot be undone.")) {
      alert("All data erased successfully!");
    }
  };

  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  return (
    // <WarpBackground>
    <div className="min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center text-white p-4">
      {/* User profile in top right corner */}
      <div className="fixed top-4 right-4 flex items-center bg-white rounded-lg px-3 py-2 z-50">
        <User className="text-black mr-2" size={20} />
        <span className="text-black text-sm">Hey, Priya</span>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className="w-full"
      >
        <CarouselContent>
          {/* Diet Card */}
          {/* Diet Card */}
<CarouselItem className="md:basis-1/2 lg:basis-1/3">
  <Card className="h-[400px] bg-black">
    <CardContent className="flex flex-col items-center justify-center p-6 bg-black text-white">
      <div className="text-3xl font-bold hover:scale-105 transition-transform mb-4">
        Current Diet
      </div>
      <div className="flex flex-col items-start">
        <label className="flex items-center mb-2">
          <input type="checkbox" className="mr-2" />
          Idli with Sambar (Morning)(3 idlis)
        </label>
        <label className="flex items-center mb-2">
          <input type="checkbox" className="mr-2" />
          Rajma Chawal (Lunch)(150 grams) and Beetroot juice
        </label>
      </div>
    </CardContent>
  </Card>
</CarouselItem>


          {/* Therapy Card */}
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <Card className="h-[400px] bg-black">
              <CardContent className="flex flex-col items-center justify-center p-6 bg-black text-white">
                <TextAnimate animation="blurInUp" by="character" className="text-3xl font-bold mb-4">
                  Therapy redefined
                </TextAnimate>
                <img src={Therapypng || "/placeholder.svg"} alt="AI Chat" className="object-cover"/>
                <Link to="/therapy" className="mt-2 px-4 py-2 bg-white text-black rounded hover:bg-gray-600 transition-colors duration-300">
                  <div className="flex items-center gap-2">
                    <span>🎵</span>
                    <span className="text-sm">Therapy</span>
                  </div>
                </Link>
              </CardContent>
            </Card>
          </CarouselItem>

          {/* AI Chat Card */}
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card className="h-[400px] bg-black">
              <CardContent className="flex flex-col items-center justify-center p-6 bg-black text-white">
                <TextAnimate animation="blurInUp" by="character" className="text-3xl font-bold mb-4">
                  Talk with our AI
                </TextAnimate>
                <img src={Chatpng || "/placeholder.svg"} alt="AI Chat" className="object-cover"/>
                <Link to="/chatpage" className="mt-2 px-4 py-2 bg-white text-black rounded hover:bg-gray-600 transition-colors duration-300">
                  <div className="flex items-center gap-2">
                    <span>💬</span>
                    <span className="text-sm">AI Chat</span>
                  </div>
                </Link>
              </CardContent>
            </Card>
          </CarouselItem>

          {/* Calendar Card */}
          {/* Calendar Card */}
<CarouselItem className="md:basis-1/2 lg:basis-1/3">
  <Card className="h-[400px] bg-black">
    <CardContent className="p-6 bg-black text-white">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Calendar</h1>
        <Link to="/calendar" className="hover:scale-110 transition-transform">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </Link>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Upcoming Events</h2>
        <ul className="space-y-2">
          {[
            { date: "Jan 20", event: "First Ultrasound Appointment" },
            { date: "Jan 25", event: "Prenatal Yoga Class" },
            { date: "Feb 5", event: "Dietitian Consultation" },
            { date: "Feb 15", event: "Second Trimester Check-up" },
            { date: "Feb 28", event: "Glucose Screening Test" },
          ].map(({ date, event }) => (
            <li key={date} className="flex justify-between">
              <span className="font-medium">{date}</span>
              <span>{event}</span>
            </li>
          ))}
        </ul>
        <Link
          to="/calendar"
          className="mt-4 block px-4 py-2 bg-white text-black text-center rounded hover:bg-gray-600 transition-colors duration-300"
        >
          View Full Calendar
        </Link>
      </div>
    </CardContent>
  </Card>
</CarouselItem>




          {/* Profile Card */}
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card className="h-[400px] bg-black">
              <CardContent className="p-6 bg-black text-white flex flex-col items-center justify-center">
                <h2 className="text-3xl font-bold mb-4">About</h2>
                <div className="bg-black/50 rounded-lg shadow-xl w-full border border-gray-600 transition-all hover:border-gray-500 p-4 mb-5">
                  <ul className="space-y-3">
                    {[
                      { label: "Name", value: "Priya Sharma" },
                      { label: "Email", value: "priya@example.com" },
                      { label: "Phone", value: "+91-9876543210" },
                      { label: "Blood Group", value: "B+" },
                      { label: "Dietary Preferences", value: "Vegetarian" },
                    ].map(({ label, value }) => (
                      <li key={label} className= "text-white transition-colors">
                        <strong>{label}:</strong> {value}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to="/login"></Link>
                  <button onClick={handleEraseAllData} className="mt-2 px-4 py-2 bg-white text-black rounded flex items-center gap-2 hover:bg-gray-600 transition-colors duration-300">
                  Erase All Data
                  </button>
              </CardContent>
            </Card>
          </CarouselItem>

          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card className="h-[400px] bg-black">
              <CardContent className="flex flex-col items-center justify-center p-6 bg-black text-white">
                <h2 className="text-3xl font-bold mb-4">More on our side</h2>
                <br></br>
                <Link to="/alone" className="mt-2 px-4 py-2 bg-white text-black rounded hover:bg-gray-600 transition-colors duration-300">
                  <div className="flex items-center gap-2">
                  <span>💭</span>
                  <span className="text-sm">Feeling alone?</span>
                  </div>
                </Link>
                 <br></br>
                 <br></br>
                <Link to="/CommunitySupport" className="mt-2 px-4 py-2 bg-white text-black rounded hover:bg-gray-600 transition-colors duration-300">
                  <div className="flex items-center gap-2">
                    <span>👥</span>
                    <span className="text-sm">Community support</span>
                  </div>
                </Link>
              </CardContent>
           </Card>
      </CarouselItem>

      </CarouselContent>
        <CarouselPrevious className="hover:scale-110 transition-transform" />
        <CarouselNext className="hover:scale-110 transition-transform" />
      </Carousel>

      
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <footer>DEVELOPED BY MOG SQUAD </footer>
      
    </div>
    
    // </WarpBackground>
  );
};

export default HomePage;

