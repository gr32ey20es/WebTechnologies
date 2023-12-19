import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import Question from "../question"
import { useExam } from "../provider"
import { setUserCurrentBox, setExamData } from '../provider/actions'
import '../customlibrary/basic.css'
import styles from './.module.css'
import Circle from '../img/circle.png'

function Form ({ setIsRefreshParent }) {
    // declare
    const { courseId, examId } = useParams();
    const navigate = useNavigate();

    // exam-state
    const [state, dispatch] = useExam()
    const currentBox = state.user.currentBox
    const lenQuestions = state.exam.questions.length

    // function
    const handleShift = (e) => {
        e.preventDefault()
        dispatch(setUserCurrentBox(e.target.value))
        setIsRefreshParent(prev => !prev)
    }
    
    function checkFully() {
        const {title, timeLimit, questions} = state.exam;

        if(!title) return 'Title is empty! Do you want to continue ?';
        if(!timeLimit) return 'Time limit is empty! Do you want to continue ?';

        for(let i=0; i<questions.length; i++) {
            var {answers, options, question } = questions[i];

            if(!question) return 'Question is empty! Do you want to continue ?';
            if(!answers.length) return 'Answer is empty! Do you want to continue ?';
            console.log(answers)
            for(let j=0; j<options.length; j++)
                if(!options[j]) return 'Option is empty! Do you want to continue ?';
        }

        return 'Submit?'
    } 

    const handleFormSubmit = (e) => {
        e.preventDefault()
        let results = window.confirm(checkFully());
        if(!results) return false;

        const data = {...state.exam, CourseID: parseInt(courseId)}
        const postExam = async () => {
            await axios.post('http://localhost:4000/api/exams', data, 
                { headers: { 'Content-Type': 'application/json' }})
        }
        const putExam = async () => {
            await axios.put('http://localhost:4000/api/exams/'+examId, data, 
                { headers: { 'Content-Type': 'application/json' }})
        }
        if (parseInt(examId) === 0) postExam()
        else putExam()

        dispatch(setExamData(null))
        navigate('/mycourses')
    }
    
    const QuestionBoxs = () => {
        let maxQuestion = Math.min(currentBox + 5, lenQuestions);
        let questionBoxs = [];

        for(let id=currentBox; id < maxQuestion; id++)
            questionBoxs.push( 
                <Question key={id} idQuestion={id} setIsRefreshParent={setIsRefreshParent}/> )

        return questionBoxs
    }    

    return <>
        <form 
            id="userForm"
            className={styles.userForm}
            onSubmit={handleFormSubmit}
        >{QuestionBoxs()}
        </form>
        <footer className={"kimcenter "+styles.footer}>
            <div>
                <img src={Circle} alt="" width='37px' className={styles.logo}/>
            </div>
            <div className={styles.shift}>
                <button disabled={currentBox < 1} className='kimpointer'
                    value="prev" onClick={handleShift}>Prev</button>
                <button disabled={currentBox >= lenQuestions - 5} className='kimpointer'
                    value="next" onClick={handleShift}>Next</button>
            </div>
            <div>
                <button className='kimpointer' form="userForm" type="submit">Submit</button>
            </div>
        </footer>
    </>
}

export default Form