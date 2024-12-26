// server/models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, default: "" },
  email: { type: String, required: true },
  password: { type: String, required: true },
  // We'll store the big form data in a "profile" subdocument
  profile: {
    // Basic Info
    fullName: String,
    dateOfBirth: Date,
    gender: String,
    height: Number,
    weight: Number,
    existingConditions: String,
    currentMedications: String,
    allergies: String,
    lifestyleHabits: String,

    // Reproductive
    reproductiveStage: String,
    averageCycleLength: Number,
    lastPeriodDate: Date,
    cycleIrregularities: String,
    expectedDeliveryDate: Date,
    pregnancyComplications: String,
    weeksPostpartum: Number,
    postpartumIssues: String,
    menopausalSymptoms: String,

    // Preferences
    dietaryPreferences: String,
    notificationPreferences: String,

    // Emergency
    emergencyContact: String,
    bloodGroup: String
  }
});

module.exports = mongoose.model("User", userSchema);
