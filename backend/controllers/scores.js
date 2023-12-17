import db from "../db.js";

export const getScore = async (req,res)=>{
    const ExamID = req.params.examId;
    try{
        const results = await db.query('SELECT * FROM scores WHERE "ExamID" = $1', [ExamID]);
        res.json(results.rows);
    }
    catch(error){
        console.error('Error fetching todos', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const addScore = (req, res) => {
	const ExamID = req.body.ExamID;
    console.log(req.body);
    // db.query(
    //     'INSERT INTO exams ("CourseID", title, 	questions, answers) VALUES ($1, $2, $3, $4)',
    //     [CourseID, ...separate(req.body)],
    //     (error, results) => {
    //     if (error) {
    //       console.error(error);
    //       res.status(500).send('Lỗi server');
    //     } else {
    //       res.send('Exam đã được thêm thành công');
    //     }
    // });
};