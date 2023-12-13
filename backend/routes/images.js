import express from "express";
import {
     getImageByCourseID
} from "../controllers/images";

const router = express.Router();
router.get("/:id",getImageByCourseID);
export default router;