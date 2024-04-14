const mongoose = require("mongoose");

const mongooseConection = async () => {
  try {
    const mongoConnect = await mongoose.connect(process.env.MONGODB);
    console.log(`MongoDB Connected: ${mongoConnect.connection.host}`);
    return mongoConnect;
  } catch (error) {
    console.log(`connection lost: ${error}`);
  }
};

module.exports = mongooseConection;
