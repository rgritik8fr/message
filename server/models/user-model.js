const mongoose = require("mongoose");

const userModel = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: [true, "username is mandatory"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "email is mandatory"],
    },
    password: {
      type: String,
      required: [true, "password is mandatory"],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model.users || mongoose.model("user", userModel);
module.exports = User;
