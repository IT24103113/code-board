import { BugReport } from "../models/bug.report.model.js";

export const getBugs = async () => {
  try {
    const bugs = await BugReport.find({});
    return bugs;
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

export const updateBug = async (id, bugData) => {
  try {
    const updatedBug = await BugReport.findByIdAndUpdate(id, bugData, {
      new: true,
    });
    return updatedBug;
  } catch (error) {
    throw error;
  }
};

export const deleteBug = async (id) => {
  try {
    const deletedBug = await BugReport.findByIdAndDelete(id);

    if (!deletedBug) {
      throw new Error("Bug not found to delete");
    }

    return deletedBug;
  } catch (error) {
    throw error;
  }
};

// get bug with user
export const getBugWithUser = async (id) => {
  try {
    const bug = await BugReport.findById(id).populate({
      path: "user",
      select: "name",
    });
    return bug;
  } catch (error) {
    throw error;
  }
};
