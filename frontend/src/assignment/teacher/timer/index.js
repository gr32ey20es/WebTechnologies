import { useEffect, useState } from "react"
import { setExamTimeLimit } from "../exam/actions"
import { useExam } from "../exam"
import styles from './ui.module.css';

function Timer () {
    const [state, dispatch] = useExam()
    const [isEditing, setIsEditing] = useState(false);
    const [date, setDate] = useState(null)

    useEffect(() => timerConvertor(state.exam.timeLimit)
    , [state.exam.timeLimit])

    function timerConvertor(time) {
        let dd = Math.floor(time / 86400)
        time -= dd * 86400
        let hh = Math.floor(time / 3600)
        time -= hh * 3600
        let mm = Math.floor(time/ 60)
        let ss = time - mm * 60
    
        dd = (!dd)        ? null : dd
        hh = (!dd && !hh) ? null : hh

        setDate({ dd, hh, mm, ss })
    }
    function dateConvertor(date) {
        let time = date.dd ? (date.dd < 0 ? 0 : date.dd) : 0
        time = time * 24 + (date.hh ? (date.hh < 0 ? 0 : date.hh) : 0)
        time = time * 60 + (date.mm < 0 ? 0 : date.mm)
        time = time * 60 + (date.ss < 0 ? 0 : date.ss)
        
        return time
    }
    const numberConverter = (number) => 
    (number > 9) ? number : '0' + number 

    const handleClick = () => setIsEditing(true)
    const handleBlur = () => {
        setIsEditing(false)
        let timer = dateConvertor(date)
        timerConvertor(timer)
        dispatch(setExamTimeLimit(timer))
    }
    const handleChange = (e) => setDate(prev => 
        ({...prev, [e.target.name]: parseInt(e.target.value) | 0})
    )
    const handleKeyDown = (e) => (e.keyCode === 13) ? handleBlur() : null
    return (
        !date ? <></> :
        <div className={styles.timer}>
            { !isEditing  ? 
            <p onClick={handleClick} style={{padding: '1px 0'}}>
                {date.dd !== null ? <>{numberConverter(date.dd)} : </> : <></>}
                {date.hh !== null ? <>{numberConverter(date.hh)} : </> : <></>}
                {numberConverter(date.mm)} : {numberConverter(date.ss)} 
            </p> :
            <div>
                <input type="number"
                    min={0} max={10}
                    value={date.dd | 0} name='dd'
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    className={styles.dateInput}
                />:
                <input type="number" autoFocus
                    min={0} max={24}
                    value={date.hh | 0} name='hh'
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    className={styles.dateInput}
                />:
                <input type="number"
                    min={-999} max={999}
                    value={date.mm} name='mm' 
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    className={styles.dateInput}
                />:
                <input type="number"
                    min={-999} max={999}
                    value={date.ss} name='ss'
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    className={styles.dateInput}
                />
            </div> 
            }
        </div> 
    )
}

export default Timer