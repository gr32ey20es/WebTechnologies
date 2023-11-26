import { useEffect, useReducer } from 'react'
import axios from 'axios'
import reducer, { initState } from './reducer'
import { setAssessmentData, setAssessmentStarted } from './actions'
import Context from './Context'

function Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, initState)

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://localhost:4000/test');
            dispatch(setAssessmentData(response.data));
            dispatch(setAssessmentStarted());
        }
        fetchData();
    }, [])

    return(
        <Context.Provider value={ [state, dispatch] }>
            { state.isAssignmentStarted && 
            !state.isAssignmentFinished && children }
        </Context.Provider>
    )
} 

export default Provider