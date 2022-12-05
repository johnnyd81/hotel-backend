const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  cheapestPrice: {
    type: Number,
    required: true,
  },
  photos: {
    type: [String],
  },
});

module.exports = mongoose.model("Hotel", hotelSchema);
