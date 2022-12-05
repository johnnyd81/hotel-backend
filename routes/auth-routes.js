const express = require("express");
const { signupUser, loginUser } = require("../controllers/auth-controller");

const router = express.Router();

//by signing up a new user is created i.e. post method
router.post("/signup", signupUser);

//after a user is signed up they can log into the app
router.post("/login", loginUser);

module.exports = router;
