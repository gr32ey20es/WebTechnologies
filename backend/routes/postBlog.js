import express from "express";
import { addPost, deletePost, getPost, getPosts, updatePost } from "../controllers/postBlog.js";

const router = express.Router();
router.get("/blog", getPosts);
router.get("/blog/:id", getPost);
router.post("/blog", addPost);
router.delete("/blog/:id", deletePost);
router.put("/blog/:id", updatePost);

export default router;