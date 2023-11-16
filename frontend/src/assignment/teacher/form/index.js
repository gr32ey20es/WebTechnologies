import axios from "axios";
import Question from "../question"
import { useExam } from "../exam"
import { setUserCurrentBox } from '../exam/actions'
import '../basic.css'
import styles from './ui.module.css'
import Circle from './circle.png'

function Form ({ setIsRefreshParent }) {
    const [state, dispatch] = useExam()
    const currentBox = state.user.currentBox
    const lenQuestions = state.exam.questions.length

    const handleShift = (e) => {
        e.preventDefault()
        dispatch(setUserCurrentBox(e.target.value))
        setIsRefreshParent(prev => !prev)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const postTest = async () => {
            await axios.post('http://localhost:4000/postTest', state, 
                { headers: { 'Content-Type': 'application/json' }})
        }
        postTest()
    }
    
    const QuestionBoxs = () => {
        let maxQuestion = Math.min(currentBox + 5, lenQuestions);
        let questionBoxs = [];

        for(let id=currentBox; id < maxQuestion; id++)
            questionBoxs.push(
            <Question key={id} idQuestion={id} setIsRefreshParent={setIsRefreshParent}/>
            )

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
                <button disabled={currentBox < 1}
                    value="prev" onClick={handleShift}>Previous</button>
                <button disabled={currentBox >= lenQuestions - 5}
                    value="next" onClick={handleShift}>Next</button>
            </div>
            <div>
                <button form="userForm" type="submit">Submit</button>
            </div>
        </footer>
    </>
}

export default Form