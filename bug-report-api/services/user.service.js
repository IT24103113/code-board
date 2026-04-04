import { User } from "../models/user.model.js";

export const createUser = async (userData) => {
  try {
    const user = await User.create(userData);
    return user;
  } catch (error) {
    throw error;
  }
};
