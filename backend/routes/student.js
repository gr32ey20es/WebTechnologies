import express from "express";
import {
    getStudentCode,
    addStudentCode,
    editStudentCode,
    getAllStudents,
    getStudentInfo,
    editStudentInfo
} from "../controllers/student.js";

const router = express.Router();

router.post("/", addStudentCode);
router.put("/:userId", editStudentCode);
router.get("/:userId", getStudentCode);
router.get("/", getAllStudents)

export default router;