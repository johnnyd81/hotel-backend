const express = require("express");

const {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/user-controller");

const router = express.Router();

//get a specific user
router.get("/:id", getUser);

//get ALL users
router.get("/", getUsers);

//edit a specific user
router.put("/:id", updateUser);

//delete a specific user
router.delete("/:id", deleteUser);

module.exports = router;
