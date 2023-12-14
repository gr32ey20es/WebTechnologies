import db from "../db.js";
export const getExamsByCourseID = async (req,res)=>{
    const  courseID  = req.params.id;
    try{
        const results = await db.query('SELECT * FROM exams WHERE "CourseID" = $1',[courseID]);
        res.json(results.rows);
    }
    catch(error){
        console.error('Error fetching todos', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}