const express = require("express");
const {
  addBooking,
  getBookings,
  deleteBooking,
} = require("../controllers/bookingController");

const router = express.Router();

//get ALL bookings
router.get("/", getBookings);

//create a new booking
router.post("/", addBooking);

//delete a specific booking
router.delete("/:id", deleteBooking);

module.exports = router;
