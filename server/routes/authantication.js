const express = require("express");
const User = require("../models/user-model");
const {
  registerUser,
  loginUser,
} = require("../controller/authantication/authantication");

const authantication = express.Router();

authantication.post("/signup", registerUser);

authantication.post("/login", loginUser);

module.exports = authantication;
