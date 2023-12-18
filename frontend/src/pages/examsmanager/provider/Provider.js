import { useEffect, useReducer, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import reducer, { initState } from './reducer'
import { setExamData, setUserCurrentBox } from './actions'
import Context from './Context'

function Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, initState)
    const [, setIsRefresh] = useState(false)

    const { courseId, examId } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            if (parseInt(examId) === 0) {
                dispatch(setExamData(null))
            }
            else {
                try {
                    const response = await axios.get('http://localhost:4000/api/exams/edit/'+examId, {
                        headers: {'Content-Type': 'application/json'}
                    });
                    dispatch(setExamData(response.data));
                } catch (error) {
                    console.error(error);
                }
            }

            dispatch(setUserCurrentBox(0));
            setIsRefresh(prev => !prev)
        }
        fetchData();
    }, [examId]);

    return(
        <Context.Provider value={ [state, dispatch] }>
            { state.user.currentBox !== null && children }
        </Context.Provider>
    )
} 

export default Provider