import express from "express";
import {
  getAllCoursesByUserID
} from "../controllers/userCourses.js"

const router = express.Router();

router.get("/:id", getAllCoursesByUserID);
export default router;
