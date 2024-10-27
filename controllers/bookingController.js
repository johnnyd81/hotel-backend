const Booking = require("../models/Booking"); // import the Booking model

//a new booking is created by a user in the frontend after they select a hotel and click the book now button
const addBooking = async (req, res) => {
  const { hotel, hotelid, username, totalDays, totalAmount } = req.body;

  try {
    const booking = await Booking.create({
      hotel,
      hotelid,
      username,
      totalDays,
      totalAmount,
    });
    res.status(200).json(booking);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//in the admin dashboard available bookings are displayed and allows an administrator to cancel bookings
const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({});
    res.status(200).json(bookings);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//the delete route allows an administrator to remove bookings
const deleteBooking = async (req, res) => {
  const { id } = req.params;

  try {
    const booking = await Booking.findByIdAndDelete(id);
    res.status(200).json(booking);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { addBooking, getBookings, deleteBooking };
