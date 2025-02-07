const User = require("../models/User/User.js");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    bcrypt.hash(password, 10, async (err, hash) => {
      if (err) {
        return res.json({
          status: false,
          message: "Something went wrong",
        });
      }

      const user = await User.create({
        email,
        password: hash,
      });

      return res.json({
        status: true,
        message: "User created successfully",
      });
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Something went wrong",
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body.formData;

    const user = await User.find({ email });

    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        return res.json({
          status: false,
          message: "Something went wrong",
        });
      }

      if (result) {
        return res.json({
          status: true,
          message: "User logged in successfully",
        });
      } else {
        return res.json({
          status: false,
          message: "Invalid credentials",
        });
      }
    });
  } catch (error) {}
};

module.exports = {
  createUser,
  login
};
