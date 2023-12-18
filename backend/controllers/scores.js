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

export const getScores = (req, res) => {
    db.query(
        'SELECT * FROM scores',
        [],
        (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).send('Lỗi server');
        } else {
            res.json(results.rows)
        }
    });
}

export const addScore = (req, res) => {
	const { ExamID, UserId } = req.body;
    
    db.query(
        'SELECT answers FROM exams WHERE "ExamID" = $1',
        [ExamID],
        (error, results) => {
        if (error) {
          console.error(error);
          res.status(500).send('Lỗi server');
        } else {
            const answers = results.rows[0].answers.answers;
            const choices = req.body.answers;
            let score = 0;

            for (let key of Object.keys(choices)) {
                let choice = choices[key],
                    answer = answers[key],
                    check  = true;

                if(choice.length !== answer.length)
                    check = false;
                else 
                    for(let i=0; i<choice.length; i++)
                        if(choice[i] !== answer[i])
                            check = false;
                
                if(check) score++;
            }

            db.query(
                'INSERT INTO scores ("UserId", "ExamID", "Score") VALUES ($1, $2, $3)',
                [UserId, ExamID, score],
                (error, results) => {
                if (error) {
                    console.error(error);
                    res.status(500).send('Lỗi server');
                } else {
                    res.send('Score đã được thêm thành công');
                }
            });
        }
    });
};