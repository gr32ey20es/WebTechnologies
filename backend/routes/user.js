import express from "express";
import {
  getUser,
  getAllUser,
  EditUser,
  DeleteUser,
  AddUser,
} from "../controllers/users.js";

const router = express.Router();

router.post("/", AddUser);
router.put("/:userId", EditUser);
router.get("/:userId", getUser);
router.get("/", getAllUser);
router.delete("/:userId", DeleteUser);

export default router;
