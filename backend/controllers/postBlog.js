import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const getPosts = (req, res) => {
  const q = "SELECT * FROM posts";

  // [req.query.cat],
  db.query(q, (err, data) => {
    if (err) return res.status(500).send(err);
    //console.log(data.rows);
    return res.status(200).json(data.rows);
  });
};

export const getPost = (req, res) => {
  const q =
    'SELECT "posts"."Id", "users"."Email", "posts"."title", "posts"."desc", "posts"."img", "posts"."cat", "posts"."date" FROM "users" JOIN "posts" ON "users"."UserId" = "posts"."uid" WHERE "posts"."Id" = $1';
  // 'SELECT * FROM "posts" WHERE "posts"."Id" = $1';
  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);
    // console.log(data.rows[0]);
    return res.status(200).json(data.rows[0]);
  });
};

export const addPost = (req, res) => {
  // const token = req.cookies.access_token;
  // if (!token) return res.status(401).json("Not authenticated!");

  // jwt.verify(token, "jwtkey", (err, userInfo) => {
  //   if (err) return res.status(403).json("Token is not valid!");
  const titleValue = req.body.title;
  const descValue = req.body.desc;
  const imgValue = req.body.imgUrl;
  const dateValue = new Date(); // Current date and time
  const uidValue = 1;
  const catValue = req.body.cat;

  db.query(
    'INSERT INTO posts ("title", "desc", "img", "date", "uid", "cat") VALUES ($1,$2,$3,$4,$5,$6)',
    [titleValue, descValue, imgValue, dateValue, uidValue, catValue],
    (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("Post has been created.");
    }
  );
  // });
};

export const deletePost = (req, res) => {
  // const token = req.cookies.access_token;
  // if (!token) return res.status(401).json("Not authenticated!");

  // jwt.verify(token, "jwtkey", (err, userInfo) => {
  //   if (err) return res.status(403).json("Token is not valid!");

  const postId = req.params.id;
  console.log(postId);
  // const q = 'DELETE FROM "posts" WHERE "Id" = ? AND "uid" = ?';
  const q = 'DELETE FROM "posts" WHERE "Id" = $1';

  db.query(
    q,
    [
      postId
      // userInfo.id
    ],
    (err, data) => {
      if (err) return res.status(403).json("You can delete only your post!");

      return res.json("Post has been deleted!");
    }
  );
  // });
};

export const updatePost = (req, res) => {
  // const token = req.cookies.access_token;
  // if (!token) return res.status(401).json("Not authenticated!");

  // jwt.verify(token, "jwtkey", (err, userInfo) => {
  //   if (err) return res.status(403).json("Token is not valid!");

  const postId = req.params.id;
  // console.log(postId);
  // console.log(req.body);
  // console.log(req.body.Id);
  // const q = 'UPDATE "posts" SET "title"=?,"desc"=?,"img"=?,"cat"=? WHERE "Id" = ? AND "uid" = ?';
  const q =
    'UPDATE "posts" SET "title"  = $1, "desc" = $2, "img" = $3, "cat" = $4 WHERE "Id" = $5';

  // const values = [];

  db.query(
    q,
    [
      req.body.title,
      req.body.desc,
      req.body.imgUrl,
      req.body.cat,
      postId,
      // userInfo.id,
    ],
    (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("Post has been updated.");
    }
  );
  // });
};
