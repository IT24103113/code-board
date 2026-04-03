import { BugReport } from "../models/bug.report.model.js";

export const getBugs = () => {
  try {
    throw new Error("Method not implement");
  } catch (error) {
    throw error;
  }
};

export const createBug = async (bugData) => {
  try {
    const bugReport = await BugReport.create(bugData);
    return bugReport;
  } catch (error) {
    throw error;
  }
};
