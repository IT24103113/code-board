import mongoose, { Schema } from "mongoose";

const BugReportSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    isResolved: { type: Boolean },
  },
  {
    strict: false,
    timestamps: true,
  },
);

export const BugReport = mongoose.model("bug-reports", BugReportSchema);
