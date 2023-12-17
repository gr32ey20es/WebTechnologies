import express from "express";
import { addExam, editExam, getExam, getExams, getEditExam, getAllExam, deleteExam} from "../controllers/exam.js";

const router = express.Router();
// get list exams
router.get("/", getAllExam);
router.get("/:courseID", getExams);
// get a exam
router.get("/run/:examId", getExam);
router.get("/edit/:examId", getEditExam);
//C_UD
router.post("/", addExam);
router.put("/:examId", editExam);
router.delete("/:examId", deleteExam);



export default router;
