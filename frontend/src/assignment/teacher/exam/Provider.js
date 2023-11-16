import { useEffect, useReducer, useState } from 'react'
import reducer, { initState } from './reducer'
import { setExamData, setUserCurrentBox } from './actions'
import Context from './Context'

function Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, initState)
    const [, setIsRefresh] = useState(null)

    useEffect(() => {
        async function fetchData() {
            dispatch(setExamData(null));
            dispatch(setUserCurrentBox(0));
            setIsRefresh()
        }
        fetchData();
    }, [])

    return(
        <Context.Provider value={ [state, dispatch] }>
            { state.user.currentBox !== null && children }
        </Context.Provider>
    )
} 

export default Provider