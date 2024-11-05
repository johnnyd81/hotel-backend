const Hotel = require("../models/Hotel"); // import the Hotel model

//the available hotels are displayed using the get endpoint
const getHotels = async (req, res) => {
  const { min, max, ...others } = req.query;
  try {
    const hotels = await Hotel.find({
      ...others,
      cheapestPrice: { $gte: min, $lte: max },
    });
    res.status(200).json(hotels);
  } catch (error) {
    res.status(404).json({ error: "Hotels not found" });
  }
};

//a specific hotel selected by the user is displayed using getHotel
const getHotel = async (req, res) => {
  const { id } = req.params;

  try {
    const hotel = await Hotel.findById(id);
    res.status(200).json(hotel);
  } catch (error) {
    res.status(404).json({ error: "Hotel does not exist" });
  }
};

//adding a hotel to the app is done using createHotel
const createHotel = async (req, res) => {
  const newHotel = new Hotel(req.body);

  try {
    const hotel = await newHotel.save();
    res.status(200).json(hotel);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

//deleteHotel removes a hotel from the database
const deleteHotel = async (req, res) => {
  const { id } = req.params;

  try {
    await Hotel.findByIdAndDelete(id);
    res.status(200).json({ msg: "Hotel has been deleted" });
  } catch (error) {
    res.status(404).json({ error: "Hotel does not exist" });
  }
};

//any alterations to a specific hotel can be done using updateHotel
const updateHotel = async (req, res) => {
  const { id } = req.params;

  try {
    const hotel = await Hotel.findByIdAndUpdate(
      { _id: id },
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(hotel);
  } catch (error) {
    res.status(404).json({ error: "Hotel does not exist" });
  }
};

module.exports = {
  createHotel,
  getHotels,
  getHotel,
  deleteHotel,
  updateHotel,
};
