import express from "express";
import {
    getStudentCode,
    addStudentCode,
    editStudentCode,
    getStudentInfo,
    editStudentInfo
 
} from "../controllers/student.js";

const router = express.Router();

router.post("/", addStudentCode);
router.put("/:userId", editStudentCode);
router.get("/:userId", getStudentCode);
router.get("/info/:userId", getStudentInfo);
router.put("/info/:userId", editStudentInfo);

export default router;