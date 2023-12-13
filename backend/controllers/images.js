import db from "../db.js";

export const getImageByCourseID = async (req,res)=>{
    const  CourseID  = req.params.id;
    try{
        const results = await db.query('SELECT "CourseID" FROM image_courses WHERE "StudentID" = $1',[CourseID]);
        res.json(results.rows);
    }
    catch(error){
        console.error('Error fetching todos', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}