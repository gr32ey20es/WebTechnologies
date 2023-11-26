import { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { setExamOption, setExamAnswer, delExamOption } from "../provider/actions"
import { useExam } from "../provider"
import styles from './ui.module.css';
import '../basic.css'
import Bin from './bin.png'


function Option ({ idOption, idQuestion, setIsRefreshParent }) {
    const [state, dispatch] = useExam()
    const type = state.exam.questions[idQuestion].type
    const answers = state.exam.questions[idQuestion].answers
    const option = state.exam.questions[idQuestion].options[idOption]

    const [value, setValue] = useState(option)
    const [isEditing, setIsEditing] = useState(false);
    
    const handleInputChange = () => {
        dispatch(setExamAnswer({idQuestion, idOption, type}))
        setIsRefreshParent(prev => !prev)
    }

    const handleClick = () => setIsEditing(true)
    const handleBlur = () => {
        if(/^\s*$/.test(value))
            setValue('')
        else
            dispatch(setExamOption({idQuestion, idOption, value}))

        setIsEditing(false);
    }
    const handleChange = (e) => setValue(e.target.value)
    const handleKeyDown = (e) => (e.keyCode === 13) ? handleBlur() : null;

    const handleImgClick = () => {
        dispatch(delExamOption({idQuestion, idOption}))
        setIsRefreshParent(prev => !prev)
    }
    return <>
        <label className={styles.options}>
            <div className={"center " + styles.values}>
                { !isEditing  ? 
                <p onClick={handleClick}>
                    {value ? value : 'Enter this option'} 
                </p> :
                <TextareaAutosize
                    autoFocus
                    value={value}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    className={styles.inputText} /> 
                }
            </div>
            <div className={"center " + styles.inputs}>
                <input 
                    type={type}
                    onChange={handleInputChange}
                    className={styles.inputOption}
                    checked={answers.includes(idOption)} />
            </div>
            <div className={"center " + styles.bins}>
                <img alt='' src={Bin} onClick={handleImgClick}/>
            </div>
        </label>
    </>
}

export default Option