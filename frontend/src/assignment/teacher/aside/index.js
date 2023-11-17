import { useExam } from "../exam"
import { setUserCurrentBox, addExamQuestion } from '../exam/actions'
import Timer from "../timer"
import '../basic.css'
import styles from './ui.module.css'


function Aside ({ setIsRefreshParent }) {
    const [state, dispatch] = useExam()
    const questions = state.exam.questions

    const handleAClick = (e) => {
        let value = e.target.getAttribute('value')
        dispatch(setUserCurrentBox(Math.floor(value / 5) * 5))
        setIsRefreshParent(prev => !prev)
    }
    function LinkBoxs() {
        let linkBoxs = [], background
        
        for (let i=0; i < questions.length; i++) {
            background = (questions[i].answers.length) ?
                'linear-gradient(0deg, lightgrey 48%,': 'linear-gradient(0deg, whitesmoke 48%,'

            background += (state.user.currentBox<=i && i<state.user.currentBox+5) ?
                'whitesmoke 49%, lightgrey 50%)' : 'whitesmoke 49%, whitesmoke 50%)'

            linkBoxs.push(
                <label key={i} className={"center "+styles.linkBox} style={{background}}>
                    <a  value={i}
                        href={"#question"+i} 
                        onClick={handleAClick}
                    >{i+1}</a>
                </label>
            )
        }

        return <>{linkBoxs}</>
    }

    const handleButtonClick = () => {
        dispatch(addExamQuestion())
        dispatch(setUserCurrentBox(Math.floor(questions.length / 5) * 5))
        setIsRefreshParent(prev => !prev)
    }
    return (
        <aside className={"center column " + styles.aside}>
            <div className={"center column " + styles.informations}>
                <div className={styles.timer}>
                    <Timer/>
                </div>
                <div className={"center "+styles.linkBoxs}>
                    {LinkBoxs()}
                    <label className={"center"}>
                        <button type="button" 
                        onClick={handleButtonClick} 
                        className={"center "+styles.button}
                        >+</button>
                    </label>
                </div>
            </div>
        </aside>
    )
}

export default Aside