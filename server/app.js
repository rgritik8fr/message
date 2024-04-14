const express = require("express");
const authantication = require("./routes/authantication");
const { default: helmet } = require("helmet");
const mongooseConection = require("./connection/Mongoose");
require("dotenv").config();

const app = express();
mongooseConection();
const PORT = process.env.PORT || 8000;
app.use(helmet());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/v1", authantication);
app.get("/", (req, res) => {
  res.send("hi");
});

app.listen(PORT, () => {
  console.log("Server has been Started ");
});
