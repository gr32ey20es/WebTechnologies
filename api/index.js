import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js"
import cors from 'cors'
const app = express();

app.use(express.json());
app.use(cors())
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.listen(8800, () => {
  console.log("Connected!");
});
