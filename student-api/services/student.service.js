import { Student } from "../models/student.model.js";

const createStudent = async (studentObj) => {
  try {
    const student = await Student.create(studentObj);

    return student;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getStudents = async () => {
  try {
    const students = await Student.find({});

    return students;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getStudentById = async (studentId) => {
  try {
    const student = await Student.findById(studentId);

    return student;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateStudent = async (studentId, data) => {
  try {
    const updatedStudent = await Student.updateOne(
      { _id: studentId },
      {
        ...data,
      },
    );

    return updatedStudent;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteStudent = async (studentId) => {
  try {
    await Student.deleteOne({ _id: studentId });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export {
  createStudent,
  getStudents,
  updateStudent,
  deleteStudent,
  getStudentById,
};
