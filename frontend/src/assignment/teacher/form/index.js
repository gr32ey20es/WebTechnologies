import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Question from "../question"
import { useExam } from "../provider"
import { setUserCurrentBox } from '../provider/actions'
import '../customlibrary/basic.css'
import styles from './.module.css'
import Circle from '../img/circle.png'

function Form ({ examId, setIsRefreshParent }) {
    // declare
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
    
    const handleFormSubmit = (e) => {
        e.preventDefault()
        const postExam = async () => {
            await axios.post('http://localhost:4000/api/exams', state, 
                { headers: { 'Content-Type': 'application/json' }})
        }
        const putExam = async () => {
            await axios.put('http://localhost:4000/api/exams/'+examId, state, 
                { headers: { 'Content-Type': 'application/json' }})
        }
        if (parseInt(examId) === 0) postExam()
        else putExam()

        navigate(-1)
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
        <footer className={"center "+styles.footer}>
            <div>
                <img src={Circle} alt="" width='37px' className={styles.logo}/>
            </div>
            <div className={styles.shift}>
                <button disabled={currentBox < 1} className='pointer'
                    value="prev" onClick={handleShift}>Prev</button>
                <button disabled={currentBox >= lenQuestions - 5} className='pointer'
                    value="next" onClick={handleShift}>Next</button>
            </div>
            <div>
                <button className='pointer' form="userForm" type="submit">Submit</button>
            </div>
        </footer>
    </>
}

export default Form