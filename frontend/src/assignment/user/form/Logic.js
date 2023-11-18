import { useEffect, useState } from "react";
import axios from "axios";
import { useAssessment } from "../assessment"
import { setUserData, setUserCurrentBox } from '../assessment/actions'
import UI from './UI'

function Logic() {
    const [state, dispatch] = useAssessment()
    const formObject = state.data.data
    const nformObject = formObject.length

    const [userForm, setUserForm] = 
    useState(() => Array(nformObject).fill([]))

    useEffect(
        () => dispatch(setUserData(userForm))
        , [userForm, dispatch]
    )

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

    const handleShift = (e) => {
        e.preventDefault();

        let op = e.target.value
        setCurrentBox(prev => prev + 5 * (op === "prev" ? -1 : 1))
        setupdatedUserCurrentBox(true)
    }

    const onBoxChange = (e) => {
        let target = e.target,
            { id, selectedOption } = target

        setUserForm(prev => {
            prev[id] = selectedOption
            return prev
        })
    } 

    const [, setRes] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const postTest = async () => {
            console.log(state)
            // delete state.data
            setRes(await axios.post('http://localhost:4000/postTest', state, 
                { headers: { 'Content-Type': 'application/json' }}))
        }
        postTest()
    }

    return (
        <UI 
            formObject={formObject} 
            userForm={userForm}
            currentBox={currentBox}
            onShift={handleShift}
            onBoxChange={onBoxChange}
            handleFormSubmit={handleFormSubmit}
        />
    )
}

export default Logic