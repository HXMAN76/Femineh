import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import logo from "../assets/image.png";

const SignUp = () => {
  const navigate = useNavigate(); // Initialize the navigation hook

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/formspage"); // Redirect to the forms page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#8B3C3C] to-[#B76E6E]">
      <div
        className="w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/3 bg-white p-6 sm:p-8 rounded-lg shadow-lg relative"
        style={{ height: "auto", maxHeight: "550px" }}
      >
        {/* Logo */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <img src={logo} alt="Logo" className="w-full max-w-[150px] h-auto object-contain" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}> {/* Attach handleSubmit to the form */}
          {/* Name Field */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-black mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 rounded-lg border border-[#8B3C3C] bg-transparent text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-[#8B3C3C]"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-black mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 rounded-lg border border-[#8B3C3C] bg-transparent text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-[#8B3C3C]"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-black mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 rounded-lg border border-[#8B3C3C] bg-transparent text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-[#8B3C3C]"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Privacy Agreement */}
          <div className="mb-4 flex items-start">
            <input
              type="checkbox"
              id="privacy"
              className="w-4 h-4 mr-2 text-[#8B3C3C] border border-[#8B3C3C] rounded focus:ring-2 focus:ring-[#8B3C3C]"
              required
            />
            <label
              htmlFor="privacy"
              className="text-sm text-black"
            >
              I agree to the{" "}
              <a href="/privacy" className="text-[#8B3C3C] underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="/terms" className="text-[#8B3C3C] underline">
                Terms of Service
              </a>.
            </label>
          </div>

          {/* Centered Sign Up Button */}
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="w-32 sm:w-36 h-10 bg-gradient-to-r from-[#8B3C3C] to-[#B76E6E] text-[#F0F0F0] rounded-lg shadow-md hover:scale-105 transition-all duration-200 flex items-center justify-center text-sm font-semibold"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;