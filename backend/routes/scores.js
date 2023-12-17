import express from "express";
import { addScore, getScore } from "../controllers/scores.js"
const router = express.Router();

router.get("/:examId", getScore);
router.post("/", addScore)
export default router;
