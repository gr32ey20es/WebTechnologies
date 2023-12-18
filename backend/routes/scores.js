import express from "express";
import { addScore, getScore, getScores } from "../controllers/scores.js"
const router = express.Router();

router.get("/:examId", getScore);
router.get("/", getScores)
router.post("/", addScore)
export default router;
