const express = require("express");
const {
  addBooking,
  getBookings,
  deleteBooking,
} = require("../controllers/bookingController");

const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

router.use(requireAuth);

//get ALL bookings
router.get("/", getBookings);

//create a new booking
router.post("/", addBooking);

//delete a specific booking
router.delete("/:id", deleteBooking);

module.exports = router;
