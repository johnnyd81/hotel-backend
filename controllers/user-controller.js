const User = require("../models/User"); // import the User model

//getUsers displays all users in the admin dashboard
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error: "No users to display" });
  }
};

//fetches a specific user by their unique id
const getUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: "User does not exist" });
  }
};

//updateUser edits details of a user
const updateUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndUpdate(
      { _id: id },
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: "User does not exist" });
  }
};

//deleteUser removes a user from the database
const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndDelete(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: "User cannot be found" });
  }
};

module.exports = { getUsers, getUser, updateUser, deleteUser };
