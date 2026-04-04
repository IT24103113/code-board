import mongoose, { Schema } from "mongoose";

const BugReportSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    isResolved: { type: Boolean },
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    strict: false,
    timestamps: true,
  },
);

export const BugReport = mongoose.model("BugReport", BugReportSchema);
