const mongoose = require("mongoose");

// Study group schema
const studyGroupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  subject: {
    type: String,
    required: true,
  },

  location: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("StudyGroup", studyGroupSchema);