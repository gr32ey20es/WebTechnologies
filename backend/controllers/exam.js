import db from "../db.js";

function join(data) {
	const exams = {...data.questions}
	delete data.questions

	exams.questions.forEach((question, index) => 
		question.answers = data.answers.answers[index])
	delete data.answers

	exams.id = data.id
	delete data.id

	exams.title = data.title
	delete data.title

	return exams;
}

function separate(data) {
	let answers = []
	const title = data.title
	delete data.title

	data.questions.forEach(question => {
		answers.push(question.answers);
	  	delete question.answers;
	});
	answers = {'answers': answers}

	delete data.CourseID;

	const questions = data;
	return [title || '', questions, answers]
}

const addExam = (req, res) => {
	const CourseID = req.body.CourseID;

    db.query(
        'INSERT INTO exams ("CourseID", title, 	questions, answers) VALUES ($1, $2, $3, $4)',
        [CourseID, ...separate(req.body)],
        (error, results) => {
        if (error) {
          console.error(error);
          res.status(500).send('Lỗi server');
        } else {
          res.send('Exam đã được thêm thành công');
        }
    });
};

const getAllExam = (req, res) => {
	db.query(
		'SELECT ExamID, title FROM exams',
		(error, results) => {
			if (error) {
				console.error(error);
				res.status(500).send('Lỗi server');
			} else {
				res.json(results.rows);
			}
		}
	);
}

function joinv2(data) {
	const exams = {...data.questions}
	delete data.questions

	exams.id = data.id
	delete data.id

	exams.title = data.title
	delete data.title
	console.log(exams);
	return exams;
}

const getExams = (req, res) => {
	db.query(
		'SELECT * FROM exams WHERE "CourseID" = $1',
		[req.params.courseID],
		(error, results) => {
			if (error) {
				console.error(error);
				res.status(500).send('Lỗi server');
			} else {
				res.json(results.rows)
				// res.json(joinv2(results.rows[0]));
			}
		}
	);
}
const getExam = (req, res) => {
	db.query(
		'SELECT * FROM exams WHERE "ExamID" = $1',
		[req.params.examId],
		(error, results) => {
			if (error) {
				console.error(error);
				res.status(500).send('Lỗi server');
			} else {
				res.json(joinv2(results.rows[0]));
			}
		}
	);
}
const getEditExam = (req, res) => {
	db.query(
		'SELECT "ExamID", title, questions, answers FROM exams WHERE "ExamID"=$1',
		[req.params.examId],
		(error, results) => {
			if (error) {
				console.error(error);
				res.status(500).send('Lỗi server');
			} else {
				res.json(join(results.rows[0]));
			}
		}
	);
}

const editExam = (req, res) => {
	console.log(req.body);
	db.query(
		'UPDATE exams SET title=$1, questions=$2, answers=$3 WHERE "ExamID"=$4',
		[...separate(req.body) ,req.params.examId],
		(error, results) => {
			if (error) {
				console.error(error);
				res.status(500).send('Lỗi server');
			} else {
				res.send('Exam đã được sửa thành công');
			}
		}
	);
}

const deleteExam = (req, res) => {
	db.query('DELETE FROM exams WHERE "ExamID" = $1', [req.params.examId], (error, results) => {
		if (error) {
			console.error(error);
			res.status(500).send('Lỗi server');
		} else {
			res.send(`Exam đã được xóa thành công`);
		}
	});
}

export { addExam, getAllExam, getExam, getExams, getEditExam, editExam, deleteExam }