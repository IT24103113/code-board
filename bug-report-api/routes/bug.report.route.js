import { Router } from "express";
import { getBugs, createBug } from "../services/bug.report.service.js";

const bugReportRouter = Router();

bugReportRouter.get("/", (req, res) => {
  try {
    return getBugs();
  } catch (error) {
    res.status(500).json({ error: true, message: error?.message });
  }
});

bugReportRouter.post("/", (req, res) => {
  try {
    const data = req.body;
    console.log("Body data: ", data);
    return createBug(data);
  } catch (error) {
    res.status(500).json({ error: true, message: error?.message });
  }
});

export { bugReportRouter };
