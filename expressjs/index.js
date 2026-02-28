import express from "express";
import userRouter from "./user.js";

const app = express();

app.use(userRouter);

// middleware to generate a unique id for each request
app.use((request, response, next) => {
  request.userId = Math.random().toString(36).substring(2, 15);
  next();
});

app.get("/", (request, response) => {
  response.status(200).json({ message: "Hello World!" });
});

app.listen(3000, (error) => {
  if (error) {
    console.error(error);
  }
  console.log("App is listing on http://localhost:3000");
});
