import { useEffect, useState } from "react"
import { useAssessment } from "../assessment"
import { setUserCurrentBox } from '../assessment/actions'
import UI from './UI'
import '../basic.css'

function Logic() {
    const [state, dispatch] = useAssessment()
    const formLength = state.data.data.length

    const intiUserCurrentBox = state.userCurrentBox
    const [currentBox, setCurrentBox] = useState( intiUserCurrentBox )
    const [updatedUserCurrentBox, setupdatedUserCurrentBox] = useState(false);

    useEffect(
        () => {
            if(updatedUserCurrentBox) {
                dispatch(setUserCurrentBox(currentBox))
                setupdatedUserCurrentBox(false)
            }
        }, [currentBox, dispatch, updatedUserCurrentBox]
    )

    useEffect(() => {
            setCurrentBox(intiUserCurrentBox)
        }, [intiUserCurrentBox, setCurrentBox]
    )  

    const handleClick = (e) => {
        let value = e.target.getAttribute('value')
        value = Math.floor(value / 5) * 5
        setCurrentBox(value)
        setupdatedUserCurrentBox(true)
    }

    return <UI nLinkBox={formLength} currentBox={currentBox} onLink={handleClick}/>
}

export default Logic