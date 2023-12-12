import db from "../db.js";
import jwt from "jsonwebtoken";

export const authorize = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    return res.status(401).json("Not authenticated!");
  }

  try {
    const decodedToken = jwt.verify(token, "jwtkey");
    req.userRole = decodedToken.role;
    next();
  } catch (err) {
    return res.status(403).json("Token is not valid!");
  }
};
// Lấy thông tin của một người dùng bằng ID
export const getUser = (req, res) => {
  const userId = req.params.userId;
  // Thực hiện truy vấn hoặc xử lý để lấy thông tin người dùng từ cơ sở dữ liệu
  // Ví dụ:
  db.query(
    'SELECT users.*, roles."Role" FROM users JOIN roles ON users."RoleId" = roles."RoleId" WHERE users."UserId" = $1',
    [userId],
    (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send('Lỗi server');
      } else {
        if (results.rows.length > 0) {
          const user = results.rows[0];
          res.json(user);
        } else {
          res.status(404).send('Không tìm thấy người dùng');
        }
      }
    }
  );
};

// Lấy tất cả người dùng
export const getAllUser = (req, res) => {
  // Thực hiện truy vấn hoặc xử lý để lấy tất cả người dùng từ cơ sở dữ liệu
  // Ví dụ:
  db.query(
    'SELECT users.*, roles."Role" FROM users JOIN roles ON users."RoleId" = roles."RoleId"',

    (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send('Lỗi server');
      } else {
        res.json(results.rows);
      }
    }
  );
};

// Thêm một người dùng mới
export const addUser = (req, res) => {
  const { username, email, password, role } = req.body;
  // Thực hiện truy vấn hoặc xử lý để thêm người dùng vào cơ sở dữ liệu
  // Ví dụ:
  db.query(
    'INSERT INTO users ("UserName", "Email", "Password", "RoleId") VALUES ($1, $2, $3, $4)',
    [username, email, password, role],
    (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send('Lỗi server');
      } else {
        res.send('Người dùng đã được thêm thành công');
      }
    }
  );
};

// Chỉnh sửa thông tin người dùng
export const editUser = (req, res) => {
  const userId = req.params.userId;
  const { username, email, password, role } = req.body;
  
  // Thực hiện truy vấn hoặc xử lý để chỉnh sửa thông tin người dùng trong cơ sở dữ liệu
  // Ví dụ:
  db.query(
    'UPDATE users SET "UserName" = $1, "Email" = $2, "Password" = $3, "RoleId" = $4 WHERE "UserId" = $5',
    [username, email, password, role, userId],
    (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send('Lỗi server');
      } else {
        res.send(`Người dùng ${userId} đã được chỉnh sửa thành công`);
      }
    }
  );
};

// Xóa người dùng
export const deleteUser = (req, res) => {
  const userId = req.params.userId;
  // Thực hiện truy vấn hoặc xử lý để xóa người dùng khỏi cơ sở dữ liệu
  // Ví dụ:
  db.query('DELETE FROM users WHERE "UserId" = $1', [userId], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Lỗi server');
    } else {
      res.send(`Người dùng ${userId} đã được xóa thành công`);
    }
  });
};