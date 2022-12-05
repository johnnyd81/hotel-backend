const express = require("express");
const {
  createHotel,
  getHotels,
  getHotel,
  updateHotel,
  deleteHotel,
} = require("../controllers/hotel-controller");

const router = express.Router();

//create hotel
router.post("/", createHotel);

//get ALL hotels
router.get("/", getHotels);

//get a specific hotel
router.get("/find/:id", getHotel);

//edit a specific hotel
router.put("/:id", updateHotel);

//delete a speecific hotel
router.delete("/:id", deleteHotel);

module.exports = router;
