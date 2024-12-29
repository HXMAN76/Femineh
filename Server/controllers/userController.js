const User = require("../models/User");

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User with that email already exists." });
    }

    // Generate MRN
    const userCount = await User.countDocuments();
    const mrn = `FEM${userCount + 1}`;

    // Create user
    const newUser = new User({ name, email, password, mrn });
    const savedUser = await newUser.save();

    return res.status(201).json({ message: "User created successfully", user: savedUser });
  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, mrn, password } = req.body;

    // Find user by email or MRN
    const user = await User.findOne({ $or: [{ email }, { mrn }] });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Validate password
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid password" });
    }

    return res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};
