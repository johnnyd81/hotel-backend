const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

//a static method to sign up a user
userSchema.statics.signup = async function (username, password) {
  //checks that all input fields are filled in
  if (!username || !password) {
    throw Error("All fields must be filled");
  }

  const exists = await this.findOne({ username }); //checks if a username exists

  if (exists) {
    throw Error("Username already exists");
  }

  const salt = await bcrypt.genSalt(10); //the number 10 specifies the number of rounds to be used to hash the password
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ username, password: hash }); //a new user is created using the new username and the hashed password

  return user;
};

//static method to log in a user
userSchema.statics.login = async function (username, password) {
  //checks that all input fields are filled in
  if (!username || !password) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ username }); //checks if the username exists

  //if user doesn't exist throw an error
  if (!user) {
    throw Error("Username does not exist");
  }

  //checks that the password matches the password stored in the database
  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Incorrect password");
  }

  return user;
};

userSchema.statics.adminLogin = async function (username, password) {
  //check that all fields are filled
  if (!username || !password) {
    throw Error("Please complete all the fields");
  }

  const admin = await this.findOne({ username, isAdmin: true });

  if (!admin) {
    throw Error("Sorry, you are not an admin");
  }

  const match = await bcrypt.compare(password, admin.password);

  if (!match) {
    throw Error("Incorrect admin password");
  }

  return admin;
};

module.exports = mongoose.model("User", userSchema);
