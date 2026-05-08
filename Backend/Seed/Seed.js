const mongoose = require("mongoose");
const dotenv = require("dotenv");

const User = require("../models/User");
const StudyGroup = require("../models/StudyGroup");

dotenv.config();

// Connect database
mongoose.connect(process.env.MONGO_URI);

const seedData = async () => {
  try {
    // Clear existing data
    await User.deleteMany();
    await StudyGroup.deleteMany();

    // Add users
    await User.insertMany([
      {
        name: "Alice",
        email: "alice@test.com",
        major: "Computer Science",
      },

      {
        name: "Bob",
        email: "bob@test.com",
        major: "Engineering",
      },
    ]);

    // Add study groups
    await StudyGroup.insertMany([
      {
        name: "Math Masters",
        subject: "Calculus",
        location: "Library Room 101",
      },

      {
        name: "Physics Squad",
        subject: "Physics",
        location: "Science Hall",
      },
    ]);

    console.log("Seed data inserted");

    process.exit();
  } catch (error) {
    console.log(error);

    process.exit(1);
  }
};

seedData();