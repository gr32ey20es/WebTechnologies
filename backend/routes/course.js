import express from "express";
import {
  getAllCourses, getCoursesByID
} from "../controllers/courses.js";

const router = express.Router();

router.get("/", getAllCourses);
router.get("/:id",getCoursesByID);
export default router;
