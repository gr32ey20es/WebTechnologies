import { useEffect, useState } from 'react';
import Switch from "react-switch"
import TextareaAutosize from 'react-textarea-autosize';
import { useExam } from "../exam"
import { setExamQuestion, setExamType, addExamOption, delExamQuestion} from "../exam/actions"
import Option from '../option';
import styles from './ui.module.css';
import '../basic.css'

function Question ({ idQuestion, setIsRefreshParent }) {
    const [state, dispatch] = useExam()  
    const type = state.exam.questions[idQuestion].type  
    const options = state.exam.questions[idQuestion].options
    const question = state.exam.questions[idQuestion].question

    const [value, setValue] = useState(question)
    const [isEditing, setIsEditing] = useState(false)
    const [isRefresh, setIsRefresh] = useState(false)

    useEffect(()=>{}, [isRefresh])

    const handleClick = () => setIsEditing(true)
    const handleBlur = () => {
        if(/^\s*$/.test(value))
            setValue('')
        else
        dispatch(setExamQuestion({idQuestion, value}))

        setIsEditing(false);
    }
    const handleChange = (e) => setValue(e.target.value)
    const handleKeyDown = (e) => (e.keyCode === 13) ? handleBlur() : null;

    const handleChangeSwitch = () => {
        dispatch(setExamType({ idQuestion, type }))
        setIsRefresh(prev => !prev)
    }
    const handleAddButton = () => {
        dispatch(addExamOption({ idQuestion }))
        setIsRefresh(prev => !prev)
    }
    const handleDeleteButton = () => {
        dispatch(delExamQuestion({ idQuestion }))
        setIsRefreshParent(prev => !prev)
    }
    return (
        <div id={"question"+idQuestion} className={styles.questionBox}>
            <div className={styles.question}>
                <p className={styles.indexs}><strong>{idQuestion+1}. &nbsp;</strong></p>
                { !isEditing  ? 
                <p onClick={handleClick}>
                    {value ? value : 'Enter this question'}
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
            <div className="center column">
                { options.map((_, idOption) =>
                <Option
                    key={idOption}
                    idOption={idOption}
                    idQuestion={idQuestion}
                    setIsRefreshParent={setIsRefresh} />
                )}
            </div>
            <div className={styles.operator}>
                <Switch onChange={handleChangeSwitch} checked={type==='radio'} />
                <button onClick={handleAddButton} type="button">Add option</button>
                <button onClick={handleDeleteButton} type="button">Delete question</button>
            </div>
        </div>
    )
}

export default Question