import mongoose, { Schema } from "mongoose";

const StudentSchema = new Schema(
  {
    name: { type: String },
    email: { type: String, unique: true },
  },
  {
    strict: false,
    timestamps: true,
  },
);

const Student = mongoose.model("students", StudentSchema);

export { Student };
