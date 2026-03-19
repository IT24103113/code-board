const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const studentRoutes = require("./routes/student.routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// TODO: Connect to MongoDB


app.use("/students", studentRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
