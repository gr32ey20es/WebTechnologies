import express from "express";
import {
    getStudentCode,
    addStudentCode,
    editStudentCode,
 
} from "../controllers/student.js";

const router = express.Router();

router.post("/", addStudentCode);
router.put("/:userId", editStudentCode);
router.get("/:userId", getStudentCode);

export default router;