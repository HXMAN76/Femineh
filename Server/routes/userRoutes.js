// server/routes/userRoutes.js
const express = require("express");
const router = express.Router();
const User = require("../models/User");

// 1) SIGNUP (Create user with minimal info)
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with that email already exists." });
    }

    // Create new user
    const newUser = new User({ name, email, password });
    const savedUser = await newUser.save();

    return res.status(201).json({
      message: "User created successfully",
      user: savedUser,
    });
  } catch (error) {
    console.error("Signup error:", error);
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
});

// 2) UPDATE PROFILE (Append detailed form info to existing user)
router.patch("/profile/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    // This entire req.body is the "profile" object
    const profileData = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { profile: profileData },
      { new: true } // return the updated doc
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "Profile updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Profile update error:", error);
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
});

// 3) LOGIN ROUTE (POST /api/login)
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check password (in a real app, you'd compare hashed passwords)
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // If everything checks out, return success (and maybe user data)
    return res.status(200).json({
      message: "Login successful",
      user: {
        _id: user._id,
        email: user.email,
        name: user.name,
        // ...anything else you want to pass back
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
