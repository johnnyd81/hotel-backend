const User = require("../models/User"); //import the User model
const jwt = require("jsonwebtoken"); //authenticates a user before a user is allowed access to the app

const signupUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.signup(username, password);

    //the json web token is created when a user signs up
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT //the secret is used to sign the token and prevents it's content from being tampered with
    );

    res.status(200).json({ username, token });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.login(username, password);

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );

    res.status(200).json({ username, token });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const loginAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.adminLogin(username, password);

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );

    res.status(200).json({ username, token });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { loginUser, signupUser, loginAdmin };
