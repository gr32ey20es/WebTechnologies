import { useExam } from "../exam"
import { setUserCurrentBox, addExamQuestion } from '../exam/actions'
import Timer from "../timer"
import '../basic.css'
import styles from './ui.module.css'

function Aside ({ setIsRefreshParent }) {
    const [state, dispatch] = useExam()
    const lenBoxs = state.exam.questions.length

    const handleAClick = (e) => {
        let value = e.target.getAttribute('value')
        dispatch(setUserCurrentBox(Math.floor(value / 5) * 5))
        setIsRefreshParent(prev => !prev)
    }

    function LinkBoxs() {
        let linkBoxs = []
        
        for (let i=0; i < lenBoxs; i++) {
            let style = (state.user.currentBox<=i && i<state.user.currentBox+5) ?
            {backgroundColor: 'lightgrey'} : {}

            linkBoxs.push(
                <label key={i} className={"center "+styles.linkBox} style={style}>
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
        dispatch(setUserCurrentBox(Math.floor(lenBoxs / 5) * 5))
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