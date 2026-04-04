import { Router } from "express";
import {
  getBugs,
  createBug,
  updateBug,
  deleteBug,
  getBugWithUser,
} from "../services/bug.report.service.js";

const bugReportRouter = Router();

bugReportRouter.get("/", async (req, res) => {
  try {
    const bugs = await getBugs();
    res.status(200).json({ bugs });
  } catch (error) {
    res.status(500).json({ error: true, message: error?.message });
  }
});

bugReportRouter.post("/", async (req, res) => {
  try {
    const data = req.body;
    console.log("Body data: ", data);
    const newBug = await createBug(data);
    res.status(201).json({ newBug });
  } catch (error) {
    res.status(500).json({ error: true, message: error?.message });
  }
});

bugReportRouter.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updatedBug = await updateBug(id, data);
    res.status(200).json({ updatedBug });
  } catch (error) {
    res.status(500).json({ error: true, message: error?.message });
  }
});

bugReportRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBug = await deleteBug(id);
    res.status(200).json({ deletedBug });
  } catch (error) {
    res.status(500).json({ error: true, message: error?.message });
  }
});

bugReportRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const bug = await getBugWithUser(id);
    res.status(200).json({ bug });
  } catch (error) {
    res.status(500).json({ error: true, message: error?.message });
  }
});

export { bugReportRouter };
