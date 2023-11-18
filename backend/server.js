import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js"
import examRoutes from "./routes/exam.js"
import express from "express";
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cors())

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/exams", examRoutes);

app.get('*', (req, res) => res.send('404 NOT FOUND!!!'))
app.listen(4000, () => {
  console.log("Connected!");
});