const express = require("express");
const {
  signupUser,
  loginUser,
  loginAdmin,
} = require("../controllers/auth-controller");

const router = express.Router();

//by signing up a new user is created i.e. post method
router.post("/signup", signupUser);

//after a user is signed up they can log into the app
router.post("/login", loginUser);

//admin user login route
router.post("/adminlogin", loginAdmin);

module.exports = router;
