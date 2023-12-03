import { useEffect, useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import reducer, { initState } from './reducer'
import { setExamData, setUserCurrentBox, setExamStarted } from './actions'
import Context from './Context'

function Provider({ examId, children }) {
    // declare
    const navigate = useNavigate();

    const [state, dispatch] = useReducer(reducer, initState)
    const [, setIsRefresh] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            if (parseInt(examId) === 0) {
                dispatch(setExamData(null))
            }
            else {
                try {
                    const response = await axios.get('http://localhost:4000/api/exams/'+examId, {
                        headers: {'Content-Type': 'application/json'}
                    });
                    dispatch(setExamData(response.data));
                } catch (error) {
                    console.error(error);
                }
            }
            dispatch(setExamStarted());
            dispatch(setUserCurrentBox(0));
            setIsRefresh(prev => !prev)
        }
        fetchData();
    }, [examId]);

    useEffect(()=>{ 
        if(state.isExamFinished) {
            navigate('/u/s/e/r')
        }
    }, [navigate, state.isExamFinished])

    return(
        <Context.Provider value={ [state, dispatch] }>
            { state.isExamStarted && 
            !state.isExamFinished && children }
        </Context.Provider>
    )
} 

export default Provider