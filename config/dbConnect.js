const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

// const dbConnect = async () => {
//   try {
//      await mongoose.connect('mongodb://localhost:27017/Jhaanjhariya');
//     console.log("Database connected successfully");
//   } catch (error) {
//     console.error("Database connection error:");
//   }
// };
const dbConnect = async () => {
  try { 
    mongoose.connect(process.env.MONGODB_URL);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Connection error :", error);
  }
};

module.exports = { dbConnect };
 