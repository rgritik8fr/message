const bcrypt = require("bcrypt");
const User = require("../../models/user-model");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const checkUser = await User.findOne({
      $or: [
        {
          username,
        },
        {
          email,
        },
      ],
    });

    if (checkUser) {
      res
        .status(404)
        .json({ error: 404, msg: "Username and Email already Exist" });
      return;
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const insertUser = await User.create({
      username,
      email,
      password: hashPassword,
    });
    res.status(201).json(insertUser);
  } catch (error) {
    res.json(error);
  }
};

// login controller

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ status: 400, msg: "Email and password is mandatory" });
    }

    const convertStringPass = password.toString();

    const findUser = await User.findOne({
      email,
    });

    if (!findUser) {
      return res.status(400).json({ status: 400, msg: "user not exist" });
    }
    const varifyPassword = await bcrypt.compare(
      convertStringPass,
      findUser?.password
    );
    if (!varifyPassword) {
      return res
        .status(400)
        .json({ status: 400, msg: "Password is not valid" });
    }
    return res.status(200).json(findUser);
  } catch (error) {
    return res.status(400).json({ status: 400, msg: error });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
