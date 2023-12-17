import db from "../db.js";
import jwt from "jsonwebtoken";

// Lấy thông tin của một người dùng bằng ID
export const getStudentCode = (req, res) => {
  const userId = req.params.userId;
  db.query(
    'SELECT "StudentCode" FROM students WHERE "UserId" = $1',
    [parseInt(userId)],
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
  console.log("studentCode: ");
  console.log(studentCode);

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
                res.send(
                  `Sinh viên đã được sửa mã sinh viên là ${userId} thành công`
                );
              }
            }
          );
        } else {
          // Lấy giá trị StudentID lớn nhất từ bảng students
          db.query(
            'SELECT "StudentID" FROM students ORDER BY "StudentID" DESC LIMIT 1',
            (error, results) => {
              if (error) {
                console.error(error);
                res.status(500).send("Lỗi server");
              } else {
                const maxStudentId =
                  results.rows.length > 0 ? results.rows[0].StudentID : 0;
                const newStudentId = maxStudentId + 1;
                console.log("newStudentId: ");
                console.log(newStudentId);
                // Thêm bản ghi mới vào bảng students
                db.query(
                  'INSERT INTO students ("StudentID", "UserId", "StudentCode") VALUES ($1, $2, $3)',
                  [newStudentId, userId, studentCode],
                  (error, results) => {
                    if (error) {
                      console.error(error);
                      res.status(500).send("Lỗi server");
                    } else {
                      console.log(results);

                      res.send(
                        `Sinh viên có mã sinh viên là ${studentCode} đã được thêm thành công`
                      );
                    }
                  }
                );
              }
            }
          );
        }
      }
    }
  );
};

export const getStudentInfo = (req, res) => {
  const userId = req.params.userId;
  console.log(userId);

  db.query(
    'SELECT * FROM students JOIN users ON students."UserId" = users."UserId" WHERE users."UserId" = $1',
    [parseInt(userId)],
    (error, results) => {
      if (error) {
        res.status(500).send("Server error");
      } else {
        if (results.rows.length > 0) {
          const student = results.rows[0];
          res.json(student);
        } else {
          // Get the maximum StudentsId
          db.query(
            'SELECT "StudentID" FROM students ORDER BY "StudentID" DESC LIMIT 1',
            (error, results) => {
              if (error) {
                res.status(500).send("Server error");
              } else {
                const maxStudentId =
                  results.rows.length > 0 ? results.rows[0].StudentID : 0;
                const newStudentsId = maxStudentId + 1;
                // Insert into students table with StudentsId as maxId + 1
                db.query(
                  'INSERT INTO students ("StudentID", "UserId") VALUES ($1, $2) RETURNING *',
                  [newStudentsId, parseInt(userId)],
                  (error, results) => {
                    if (error) {
                      res.status(500).send("Server error");
                    } else {
                      const student = results.rows[0];
                      res.json(student);
                    }
                  }
                );
              }
            }
          );
        }
      }
    }
  );
};
export const editStudentInfo = (req, res) => {
  const { PhoneNumber, Hometown, BirthYear } = req.body;
  const userId = req.params.userId;
  console.log(PhoneNumber);
  console.log(Hometown);
  console.log(BirthYear);

  // Thực hiện truy vấn hoặc xử lý để sửa thông tin người dùng trong cơ sở dữ liệu
  // Ví dụ:
  db.query(
    'UPDATE students SET "PhoneNumber" = $1, "Address" = $2, "BirthOfDate" = $3 WHERE "UserId" = $4',
    [PhoneNumber, Hometown,BirthYear, userId],
    (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send("Lỗi server");
      } else {
        res.send("Thông tin sinh viên đã được cập nhật thành công");
      }
    }
  );
};
