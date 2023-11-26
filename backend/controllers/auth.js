import db from "../db.js";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  // CHECK EXISTING USER
  const selectQuery = "SELECT * FROM users WHERE Email = ? OR UserName = ?";
  db.query(selectQuery, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already exists!");

    const insertQuery =
      "INSERT INTO users (`UserName`, `Email`, `Password`) VALUES (?)";
    const values = [req.body.username, req.body.email, req.body.password];

    db.query(insertQuery, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been created.");
    });
  });
};

export const login = (req, res) => {
  const selectQuery = 'SELECT * FROM "users" WHERE "users"."Email" = $1';
  db.query(selectQuery, [req.body.username], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }
    const data = result.rows;
    if (data.length === 0) {
      return res.status(404).json("User not found!");
    }
    const user = data[0];
    // Check password
    if (req.body.password !== user.Password) {
      return res.status(400).json("Wrong username or password!");
    }
    const token = jwt.sign({ id: user.RoleId }, "jwtkey");
    const { Password, ...userData } = user; // Use destructuring to exclude the "Password" property
    res.cookie("access_token", token, {
      httpOnly: true,
    });
    res.status(200).json(userData);
  });
};

export const logout = (req, res) => {
  res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json("User has been logged out.");
};