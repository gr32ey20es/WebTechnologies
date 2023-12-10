import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import courseRoute from "./routes/course.js";
import studentCoursesRoute from "./routes/studentCourses.js";
import cors from 'cors'
const app = express();
app.use(express.json());
app.use(cors())
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/courses", courseRoute);
app.use("/api/studentcourses",studentCoursesRoute);
app.listen(4000, () => {
  console.log("Connected!");
});