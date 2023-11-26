import express from "express";
import { addExam, editExam, getExam, getEditExam, getAllExam, deleteExam} from "../controllers/exam.js";

const router = express.Router();
router.post("/", addExam);
router.get("/", getAllExam);
router.get("/:examId", getExam);
router.get("/edit/:examId", getEditExam);
router.put("/:examId", editExam);
router.delete("/:examId", deleteExam);

export default router;
