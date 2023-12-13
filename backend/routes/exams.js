import express from "express";
import { getExamsByCourseID } from "../controllers/exams.js"
const router = express.Router();

router.get("/:id",getExamsByCourseID);
export default router;
