import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/image.png"; // Import your logo

const Login = () => {
  const navigate = useNavigate();

  // Local state for form fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // On login form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();
      if (response.ok) {
        // Login success
        console.log("Login success:", data);

        // Save userId in local storage (if needed)
        localStorage.setItem("userId", data.user._id);

        // Redirect to homepage
        navigate("/homepage");
      } else {
        // Handle errors
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Something went wrong during login. Check console for details.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#8B3C3C] to-[#B76E6E]">
      <div
        className="w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/3 bg-white p-6 sm:p-8 rounded-lg shadow-lg relative"
        style={{ height: "auto", maxHeight: "500px" }}
      >
        {/* Logo */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <img
            src={logo}
            alt="Logo"
            className="w-full max-w-[150px] h-auto object-contain"
          />
        </div>

        <h1 className="text-2xl font-bold mb-4 text-center text-black">
          Login
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Email */}
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
              className="w-full p-2 rounded-lg border border-[#8B3C3C]
                         bg-transparent text-black placeholder-gray-700
                         focus:outline-none focus:ring-2 focus:ring-[#8B3C3C]"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
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
              className="w-full p-2 rounded-lg border border-[#8B3C3C]
                         bg-transparent text-black placeholder-gray-700
                         focus:outline-none focus:ring-2 focus:ring-[#8B3C3C]"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Centered Login Button */}
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="w-32 sm:w-36 h-10 bg-gradient-to-r from-[#8B3C3C] to-[#B76E6E]
                         text-[#F0F0F0] rounded-lg shadow-md hover:scale-105
                         transition-all duration-200 flex items-center justify-center text-sm font-semibold"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
