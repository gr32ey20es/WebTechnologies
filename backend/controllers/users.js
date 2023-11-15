import db from "../db.js";
import jwt from "jsonwebtoken";

// Lấy thông tin của một người dùng bằng ID
export const getUser = (req, res) => {
  const userId = req.params.userId;
  // Thực hiện truy vấn hoặc xử lý để lấy thông tin người dùng từ cơ sở dữ liệu
  // Ví dụ:
  db.query(
    'SELECT users.*, roles.Role FROM users JOIN roles ON users.RoleId = roles.RoleId WHERE users.UserId = ?',
    [userId],
    (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send('Lỗi server');
      } else {
        if (results.length > 0) {
          const user = results[0];
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
    'SELECT users.*, roles.Role FROM users JOIN roles ON users.RoleId = roles.RoleId',
    (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send('Lỗi server');
      } else {
        res.json(results);
      }
    }
  );
};

// Thêm một người dùng mới
export const AddUser = (req, res) => {
  const { username, email, password, role } = req.body;
  // Thực hiện truy vấn hoặc xử lý để thêm người dùng vào cơ sở dữ liệu
  // Ví dụ:
  db.query(
    'INSERT INTO users (UserName, Email, Password, RoleId) VALUES (?, ?, ?, ?)',
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
export const EditUser = (req, res) => {
  const userId = req.params.userId;
  const { username, email, password, role } = req.body;
  
  // Thực hiện truy vấn hoặc xử lý để chỉnh sửa thông tin người dùng trong cơ sở dữ liệu
  // Ví dụ:
  db.query(
    'UPDATE users SET UserName = ?, Email = ?, Password = ?, RoleId = ? WHERE UserId = ?',
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
export const DeleteUser = (req, res) => {
  const userId = req.params.userId;
  // Thực hiện truy vấn hoặc xử lý để xóa người dùng khỏi cơ sở dữ liệu
  // Ví dụ:
  db.query('DELETE FROM users WHERE UserId = ?', [userId], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Lỗi server');
    } else {
      res.send(`Người dùng ${userId} đã được xóa thành công`);
    }
  });
};