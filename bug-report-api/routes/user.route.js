import { Router } from "express";
import { createUser } from "../services/user.service.js";

const userRouter = Router();

userRouter.post("/", async (req, res) => {
  try {
    const userData = req.body;
    const user = await createUser(userData);
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ error: true, message: error?.message });
  }
});

export { userRouter };
