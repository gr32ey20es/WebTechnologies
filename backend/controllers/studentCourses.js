import db from "../db.js";

export const getAllCoursesByStudentID = async (req,res)=>{
    const  studentID  = req.params.id;
    console.log(studentID);
    try{
        const results = await db.query('SELECT "CourseID" FROM enrollments WHERE "StudentID" = $1',[parseInt(studentID)]);
        res.json(results.rows);
    }
    catch(error){
        console.error('Error fetching todos', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}