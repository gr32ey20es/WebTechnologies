import db from "../db.js";
export const getAllCourses = (req,res)=>{
    try{
        const results = db.query('SELECT * FROM courses');
        res.json(results);
    }
    catch{
        
        console.error('Error fetching todos', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}