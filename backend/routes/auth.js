import express from "express";
import { login,  logout, register,
    ///// BLOG
    // logoutBlog,loginBlog , registerBlog 
    ///// BLOG
 } 
    
    from "../controllers/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.post("/logout", logout);

////////////////////////////BLOG
// router.post("/blog/register", registerBlog);
// router.post("/blog/login", loginBlog);
// router.post("/blog/logout", logoutBlog)
///////////////////////////BLOG

export default router;
