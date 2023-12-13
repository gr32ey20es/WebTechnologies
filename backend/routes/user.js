import express from "express";
import {
  getUser,
  getAllUser,
  editUser,
  deleteUser,
  addUser,
} from "../controllers/users.js";

const router = express.Router();

router.post("/", addUser);
router.put("/:userId", editUser);
router.get("/:userId", getUser);
router.get("/", getAllUser);
router.delete("/:userId", deleteUser);

export default router;
