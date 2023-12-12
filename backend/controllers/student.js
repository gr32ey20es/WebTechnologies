import db from "../db.js";
import jwt from "jsonwebtoken";

// Lấy thông tin của một người dùng bằng ID
export const getStudentCode = (req, res) => {
  const userId = req.params.userId;
  db.query(
    `SELECT "StudentCode" FROM students WHERE students."UserId" = $1 `,
    [userId],
    (error, results) => {
      if (error) {
        res.status(500).send("Lỗi server");
      } else {
        if (results.rows.length > 0) {
          const student = results.rows[0];
          res.json(student);
        } else {
          res.status(200).send("Không tìm thấy người dùng");
        }
      }
    }
  );
};

export const addStudentCode = (req, res) => {
  const { studentCode } = req.body;
  const userId = req.params.userId;

  // Thực hiện truy vấn hoặc xử lý để thêm người dùng vào cơ sở dữ liệu
  // Ví dụ:
  db.query(
    'INSERT INTO students ("UserId", "StudentCode") VALUES ($1, $2)',
    [userId, studentCode],
    (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send("Lỗi server");
      } else {
        res.send("Mã sinh viên đã được thêm thành công");
      }
    }
  );
};

export const editStudentCode = (req, res) => {
  const userId = req.params.userId;
  const { studentCode } = req.body;

  // Kiểm tra xem mã sinh viên đã tồn tại hay chưa
  db.query(
    'SELECT COUNT(*) AS count FROM students WHERE "UserId" = $1',
    [userId],
    (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send("Lỗi server");
      } else {
        const count = results.rows[0].count;

        if (count > 0) {
          // Mã sinh viên đã tồn tại, tiến hành cập nhật mã sinh viên
          db.query(
            'UPDATE students SET "StudentCode" = $1 WHERE "UserId" = $2',
            [studentCode, userId],
            (error, results) => {
              if (error) {
                console.error(error);
                res.status(500).send("Lỗi server");
              } else {
                res.send(`Sinh viên đã được sửa mã sinh viên là ${userId} thành công`);
              }
            }
          );
        } else {
          // Mã sinh viên không tồn tại, tiến hành chèn bản ghi mới vào bảng students
          db.query(
            'INSERT INTO students ("UserId", "StudentCode") VALUES ($1, $2)',
            [userId, studentCode],
            (error, results) => {
              if (error) {
                console.error(error);
                res.status(500).send("Lỗi server");
              } else {
                res.send(`Sinh viên có mã sinh viên là ${studentCode} đã được thêm thành công`);
              }
            }
          );
        }
      }
    }
  );
};