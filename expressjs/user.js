import { Router } from "express";
import { User } from "./userLogic";

const userRouter = Router();

userRouter.use((request, response, next) => {
  request.userId = Math.random().toString(36).substring(2, 15);
  next();
});

userRouter.use((request, response, next) => {
  request.sessionId = Math.random().toString(36).substring(2, 15);
  next();
});
// Controller
userRouter.get("/me", (request, response) => {
  // Business logic - Getting user details from the database
  const user = new User();
  const userData = user.getUser();

  // View
  response.json({
    id: request.userId,
    sessionId: request.sessionId,
    name: "John Doe",
    email: "john.doe@example.com",
    phoneNumber: "123-456-7890",
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345",
    },
  });
});

export default userRouter;
