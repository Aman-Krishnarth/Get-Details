const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_URI)
      .then(() => console.log("MongoDB connection SUCCESS"))
      .catch((err) => {
        console.log("MongoDB connection FAIL");
        console.log(err);
      });
  } catch (error) {
    console.error("MongoDB connection FAIL");
    console.log(error);
  }
};

module.exports = connectDB;
