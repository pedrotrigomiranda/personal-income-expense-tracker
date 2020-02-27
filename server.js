const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");

dotenv.config({ path: "./config/config.env" });

const transactions = require("./routes/transactions");

const app = express();

app.use("/api/transactions", transactions);

const PORT = process.env.PORT || 8080;

app.listen(
  PORT,
  console.log(
    `Server running on ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
