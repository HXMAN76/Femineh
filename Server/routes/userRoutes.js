const express = require("express");
const router = express.Router(); // Initialize the router
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

    // Get the count of existing users to generate the MRN
    const userCount = await User.countDocuments();
    const mrn = `FEM${userCount + 1}`;

    // Create new user
    const newUser = new User({ name, email, password, mrn });
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
    const profileData = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { profile: profileData },
      { new: true } // Return the updated document
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

// 3) LOGIN (Support login via email or MRN)
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email or MRN
    const user = await User.findOne({
      $or: [{ email }, { mrn: email }],
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check password
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid password" });
    }

    return res.status(200).json({
      message: "Login successful",
      user: {
        _id: user._id,
        email: user.email,
        name: user.name,
        mrn: user.mrn,
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
