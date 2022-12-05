const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    hotel: {
      type: String,
      required: true,
    },
    hotelid: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    totalDays: {
      type: Number,
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);
