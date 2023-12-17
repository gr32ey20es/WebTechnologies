import db from "../db.js";

export const getAllCoursesByUserID = async (req,res)=>{
    const  studentID  = req.params.id;
    try{
        const results = await db.query('SELECT * FROM courses WHERE "CourseID" = ANY (SELECT "CourseID" FROM enrollments WHERE "UserId" = $1)',
        [parseInt(studentID)]);
        res.json(results.rows);
    }
    catch(error){
        console.error('Error fetching todos', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}