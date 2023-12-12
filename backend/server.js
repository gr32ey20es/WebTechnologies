import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js"
import studentRoutes from "./routes/student.js"
import cors from 'cors'
const app = express();

app.use(express.json());
app.use(cors())
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/students", studentRoutes);

app.listen(4000, () => {
  console.log("Connected!");
});