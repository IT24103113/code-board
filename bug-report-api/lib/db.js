import mongoose from "mongoose";

export const connectToDb = async () => {
  try {
    const uri = process.env.DATABASE_URI;
    const mongo = await mongoose.connect(uri);
    console.log("Database is connected");
    return mongo;
  } catch (error) {
    console.log("Database connection erorr");
    throw error;
  }
};
