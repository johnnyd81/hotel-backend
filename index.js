const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const userRoutes = require("./routes/user-routes");
const hotelRoutes = require("./routes/hotel-routes");
const authRoutes = require("./routes/auth-routes");
const bookingRoutes = require("./routes/booking-routes");
const PORT = process.env.PORT || 4000;

//helmet adds security to the app
const helmet = require("helmet");

//initialize an express app
const app = express();

//middleware
app.use(express.json());
app.use(helmet());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/hotels", hotelRoutes);
app.use("/api/bookings", bookingRoutes);

//connect to the database
const connect = async () => {
  try {
    mongoose.connect(process.env.MONGO);
    console.log("Connected to the database");
  } catch (error) {
    throw error;
  }
};

//by starting the server, the connection to the database is made
app.listen(PORT, () => {
  connect();
  console.log("Listening on PORT", PORT);
});
