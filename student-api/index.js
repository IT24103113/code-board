import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import studentRouter from "./routes/student.route.js";

const connectToDb = async () => {
  try {
    const dbUrl = process.env.DATABASE_URL;

    await mongoose.connect(dbUrl);
    console.log("Database connected!");
  } catch (error) {
    console.log(error?.message);
  }
};

const main = async () => {
  const app = express();

  app.use(express.json());
  app.use("/students", studentRouter);

  await connectToDb();

  app.get("/", (req, res) => {
    res.status(200).json({ name: "student-api" });
  });

  app.listen(3000, () => {
    console.log("Server started in http:://localhost:3000");
  });
};

main();
