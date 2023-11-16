import { useState } from "react"
import { useExam } from "../exam"
import { setExamTimeLimit } from "../exam/actions"

function Timer () {
    const [state, dispatch] = useExam()
    const [isEditing, setIsEditing] = useState(false);
    const [timer, setTimer] = useState(state.exam.timeLimit)

    function timeConvertor(time) {
        let dd = Math.floor(time / 86400)
        time -= dd * 86400
        let hh = Math.floor(time / 3600)
        time -= hh * 3600
        let mm = Math.floor(time/ 60)
        let ss = time - mm * 60
    
        dd = (!dd)        ? 0 : (dd > 9 ? dd : '0' + dd)
        hh = (!dd && !hh) ? 0 : (hh > 9 ? hh : '0' + hh)
        mm = mm > 9 ? mm : '0' + mm
        ss = ss > 9 ? ss : '0' + ss

        return { dd, hh, mm, ss }
    }
    
    const handleClick = () => setIsEditing(true)
    const handleBlur = () => {
        setIsEditing(false)
        dispatch(setExamTimeLimit(timer))
    }
    const handleChange = (e) => setTimer(e.target.value)
    const handleKeyDown = (e) => (e.keyCode === 13) ? handleBlur() : null;
    
    let { dd, hh, mm, ss } = timeConvertor(timer)
    return (
        <div>
            { !isEditing  ? 
            <p onClick={handleClick}>
                {dd ? <>{dd}:</> : <></>}
                {hh ? <>{hh}:</> : <></>}
                {mm}:{ss} 
            </p> :
            <input type="number" autoFocus
                value={timer}
                onBlur={handleBlur}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            /> }
        </div>
    )
}

export default Timer