import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import postBlogRoutes from "./routes/postBlog.js";
import multer from "multer";


import cors from 'cors'
const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,'../frontend/public/upload')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname)
  }
})



const upload = multer({storage})

app.post('/api/upload', upload.single('file'), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename)
})



app.use(express.json());
app.use(cors())
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/postBlog", postBlogRoutes);


/////////////////////////////////////////////////////
app.listen(4000, () => {
  console.log("Connected!");
});