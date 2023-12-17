import db from "../db.js";
import { addEnrollment, deleteEnrollmentByCourseID } from "./enrollments.js";

export const getAllCourses = async(req,res)=>{
    try{
        const results = await db.query('SELECT * FROM courses');
        res.json(results.rows);
    }
    catch(error){
        console.error('Error fetching todos', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
export const getCoursesByID = async (req,res)=>{
    try{
        const results = await db.query('SELECT * FROM courses WHERE "CourseID" = $1',[req.params.courseID]);
        res.json(results.rows);
    }
    catch(error){
        console.error('Error fetching todos', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const addCourse = (req, res) => {
    const { CourseName, CourseDescription, ImagePath } = req.body;

    db.query(
        'INSERT INTO courses ("CourseName", "CourseDescription", "ImagePath") VALUES ($1, $2, $3)',
        [CourseName, CourseDescription, ImagePath],
        (error,) => {
        if (error) {
            console.error('Error fetching todos', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
        else {
            db.query(
                'SELECT "CourseID" FROM courses ORDER BY "CourseID" DESC LIMIT 1',
                [],
                (error, results) => {
                if (error) {
                    console.error('Error fetching todos', error);
                    res.status(500).json({ error: 'Internal Server Error' });
                } else {
                    const {CourseID} = results.rows[0];
                    req.body = {...req.body, CourseID}
                    addEnrollment(req, res)
                }
            });
        }
    });
};

export const editCourse = (req, res) => {
    const {CourseName, CourseDescription, ImagePath} = req.body;

	db.query(
		'UPDATE courses SET "CourseName"=$1, "CourseDescription"=$2, "ImagePath"=$3 WHERE "CourseID"=$4',
		[CourseName, CourseDescription, ImagePath, req.params.courseID],
		(error,) => {
			if (error) {
				console.error(error);
				res.status(500).send('Lỗi server');
			} else {
				res.send('Course đã được sửa thành công');
			}
		}
	);
}

export const deleteCourse = (req, res) => {
    deleteEnrollmentByCourseID(req, res);

	db.query('DELETE FROM courses WHERE "CourseID" = $1', 
    [req.params.courseID], 
    (error) => {
		if (error) {
            console.error(error);
			res.status(500).send('Lỗi server');
		} else {
            console.log(req.params.courseID);
            res.send('Course đã được xóa thành công');
		} 
	});
}
