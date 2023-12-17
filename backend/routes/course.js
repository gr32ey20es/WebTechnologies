import express from "express";
import {
  addCourse,
  getAllCourses, getCoursesByID,
  editCourse,
  deleteCourse
} from "../controllers/courses.js";

const router = express.Router();

router.post("/", addCourse);
router.get("/", getAllCourses);
router.get("/:courseID",getCoursesByID);
router.put("/:courseID", editCourse);
router.delete("/:courseID", deleteCourse);

export default router;
