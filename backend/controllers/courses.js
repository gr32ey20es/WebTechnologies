import db from "../db.js";
export const getAllCourses = async(req,res)=>{
    try{
        const results = await db.query('SELECT courses."CourseID",courses."CourseName",courses."CourseDescription",image_courses."ImagePath" FROM courses JOIN image_courses ON courses."CourseID" = image_courses."CourseID"');
        res.json(results.rows);
    }
    catch(error){
        console.error('Error fetching todos', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
export const getCoursesByID = async (req,res)=>{
    const  courseID  = req.params.id;
    try{
        const results = await db.query('SELECT * FROM courses WHERE "CourseID" = $1',[courseID]);
        res.json(results.rows);
    }
    catch(error){
        console.error('Error fetching todos', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}