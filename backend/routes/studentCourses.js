import express from "express";
import {
  getAllCoursesByStudentID
} from "../controllers/studentCourses.js"

const router = express.Router();

router.get("/:id", getAllCoursesByStudentID);
export default router;
