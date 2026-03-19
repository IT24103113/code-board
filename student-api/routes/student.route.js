import { Router } from "express";
import {
  createStudent,
  getStudents,
  updateStudent,
  deleteStudent,
  getStudentById,
} from "../services/student.service.js";

const studentRouter = Router();

studentRouter.post("/create", async (req, res) => {
  try {
    const studentData = req.body;
    console.log(studentData);
    const newStudent = await createStudent(studentData);
    res.status(201).json({ newStudent });
  } catch (error) {
    res.status(500).json({ message: "Student creation failed", error });
  }
});

studentRouter.get("/", async (req, res) => {
  try {
    const students = await getStudents();

    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: "Student get failed", error });
  }
});

studentRouter.get("/:id", async (req, res) => {
  try {
    const studentId = req.params.id;
    const students = await getStudentById(studentId);

    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: "Student get failed", error });
  }
});

studentRouter.put("/:id", async (req, res) => {
  try {
    const studentId = req.params.id;
    const data = req.body;
    const student = await updateStudent(studentId, data);

    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: "Student update failed", error });
  }
});

studentRouter.delete("/:id", async (req, res) => {
  try {
    const studentId = req.params.id;
    await deleteStudent(studentId);

    res.status(200).json({
      message: `Student with ${studentId} is now deleted`,
      timestamp: new Date(),
    });
  } catch (error) {
    res.status(500).json({ message: "Student update failed", error });
  }
});

export default studentRouter;
