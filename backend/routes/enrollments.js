import express from "express";
import { addEnrollment } from "../controllers/enrollments.js";

const router = express.Router();
router.post("/", addEnrollment);

export default router;