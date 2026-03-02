const mongoose = require("../db");

const vocabSchema = new mongoose.Schema({
  category: String,
  english: String,
  arabic: String,
  pronunciation: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Vocab", vocabSchema);
