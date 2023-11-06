import { useState, useEffect } from "react"
import { useAssessment } from "../assessment"
import { setAssessmentFinished } from '../assessment/actions'

function Timer({ setIsFinished }) {
    console.log("Timer re-render...")

    const [state, dispatch] = useAssessment()
    const initTimer = state.data.timeLimit

    const [timer, setTimer] = useState(initTimer)

    useEffect(() => {
        const timeoutId = setTimeout(
            () => dispatch(setAssessmentFinished())
            , (initTimer + 1) * 1000
        );
        
        return () => clearTimeout(timeoutId);
      }, [initTimer, dispatch]);
    
    useEffect(() => {
        const timerId = setInterval(
            () => setTimer(prev => prev > 0 ? prev - 1 : prev)
            , 1000
        );
        
        return () => clearInterval(timerId);
    }, [])

    return(<p>{timer}</p>)
}

export default Timer