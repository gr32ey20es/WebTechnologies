import db from "../db.js";

export const addEnrollment = (req, res) => {
  const { UserId, CourseID } = req.body;

  db.query(
    'SELECT * FROM enrollments WHERE "UserId" = $1 and "CourseID" = $2',
    [UserId, CourseID],
    (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send("Lỗi server");
      }
      else if(results.rows.length === 0)
        db.query(
          'INSERT INTO enrollments ("UserId", "CourseID") VALUES ($1, $2)',
          [UserId, CourseID],
          (error, results) => {
            if (error) {
              console.error(error);
              res.status(500).send("Lỗi server");
            } else {
              res.send("Enrollments đã được thêm thành công");
            }
          }
        );
    }
  );
};

export const deleteEnrollmentByCourseID = (req, res) => {
  db.query(
    'DELETE FROM enrollments WHERE "CourseID" = $1',
    [req.params.courseID],
    (error, ) => {
      if (error) {
        console.error(error);
        res.status(500).send("Lỗi server");
      }
    }
  );
}


