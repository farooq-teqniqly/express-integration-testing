require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use("/users", require("./routes/userRoutes"));

app.all("*", (req, res) => {
  return res.status(404);
});

module.exports = app;
