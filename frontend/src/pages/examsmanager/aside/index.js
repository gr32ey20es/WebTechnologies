import { useExam } from "../provider"
import { setUserCurrentBox, addExamQuestion, setExamTitle } from '../provider/actions'
import Timer from "../timer"
import '../customlibrary/basic.css'
import styles from './.module.css'
import PEditable from '../customlibrary/peditable';

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
                <label key={i} className={"kimcenter "+styles.linkBox} style={{background}}>
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

    const _setExamTitle = (value)=>dispatch(setExamTitle(value))

    return (
        <aside className={"kimcenter kimcolumn " + styles.aside}>
            <div className={styles.peditable}>
                <PEditable 
                initValue={state.exam.title} 
                notify='Enter title' 
                onBlur={_setExamTitle}
                fontSize={17}
                />
            </div>
            <div className={"kimcenter kimcolumn " + styles.informations}>
                <div className={styles.timer}>
                    <Timer/>
                </div>
                <div className={"kimcenter "+styles.linkBoxs}>
                    {LinkBoxs()}
                    <label className={"kimcenter"}>
                        <button type="button" 
                        onClick={handleButtonClick} 
                        className={"kimcenter "+styles.button}
                        >+</button>
                    </label>
                </div>
            </div>
        </aside>
    )
}

export default Aside