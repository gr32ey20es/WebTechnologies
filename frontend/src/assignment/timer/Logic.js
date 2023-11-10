import { useState, useEffect } from "react"
import { useAssessment } from "../assessment"
import { setAssessmentFinished } from '../assessment/actions'
import UI from './UI'

function Logic () {
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
            () => setTimer(prev => prev - (prev > 0))
            , 1000
        );
        
        return () => clearInterval(timerId);
    }, [])

    return <UI time={timer} />
}

export default Logic