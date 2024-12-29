const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, default: "" },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  mrn: { type: String, unique: true }, // Medical Record Number

  // Profile information
  profile: {
    fullName: String,
    dateOfBirth: Date,
    gender: String,
    height: Number,
    weight: Number,
    existingConditions: String,
    currentMedications: String,
    allergies: String,
    lifestyleHabits: String,
    reproductiveStage: String,
    averageCycleLength: Number,
    lastPeriodDate: Date,
    cycleIrregularities: String,
    expectedDeliveryDate: Date,
    pregnancyComplications: String,
    weeksPostpartum: Number,
    postpartumIssues: String,
    menopausalSymptoms: String,
    dietaryPreferences: String,
    notificationPreferences: String,
    emergencyContact: String,
    bloodGroup: String
  }
});

module.exports = mongoose.model("User", userSchema);
