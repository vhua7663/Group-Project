const express = require("express");
const router = express.Router();

const User = require("../models/User");
const StudyGroup = require("../models/StudyGroup");

//User.js route

// create user
router.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);

    await user.save();

    res.json(user);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

// read all users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();

    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// update user
router.put("/users/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

// delete user
router.delete("/users/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.json({
      message: "User deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

//route to studygroup.js

// CREATE study group
router.post("/studygroups", async (req, res) => {
  try {
    const group = new StudyGroup(req.body);

    await group.save();

    res.json(group);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

// read all study groups
router.get("/studygroups", async (req, res) => {
  try {
    const groups = await StudyGroup.find();

    res.json(groups);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// update study group
router.put("/studygroups/:id", async (req, res) => {
  try {
    const updatedGroup = await StudyGroup.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedGroup);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

// delete study group
router.delete("/studygroups/:id", async (req, res) => {
  try {
    await StudyGroup.findByIdAndDelete(req.params.id);

    res.json({
      message: "Study group deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;