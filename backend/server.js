import express from "express";
import cors from 'cors'
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import courseRoute from "./routes/course.js";
import studentCoursesRoute from "./routes/studentCourses.js";
import imagesRoute from "./routes/images.js";
import examRoutes from "./routes/exam.js";
import studentRoutes from "./routes/student.js"
import postBlogRoutes from "./routes/postBlog.js"
import { addEnrollment } from "./controllers/enrollments.js";

const app = express();
app.use(express.json());
app.use(cors())

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/courses", courseRoute);
app.use("/api/studentcourses",studentCoursesRoute);
app.use("/api/images",imagesRoute);
app.use("/api/exams", examRoutes);
app.use("/api/students", studentRoutes);
// app.use("/api/enrollments", enrollmentsRoutes);
// app.use("/api/scores", scoresRoutes);
app.use("/api/postBlog", postBlogRoutes);
app.get('*', (req, res) => res.send('404 NOT FOUND!!!'))

app.listen(4000, () => {
  console.log("Connected!");
});