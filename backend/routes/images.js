import express from "express";
import { getImagePathByCourseID } from "../controllers/images.js"
const router = express.Router();

router.get("/:id",getImagePathByCourseID);
export default router;
