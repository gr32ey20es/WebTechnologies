import { setExamQuestion, setExamType, addExamOption, delExamQuestion } from "../provider/actions";
import { useExam } from "../provider";
import { useEffect, useState } from 'react';
import TypeSwitch from '../customlibrary/typeswitch';
import PEditable from '../customlibrary/peditable';
import '../customlibrary/basic.css';
import styles from './.module.css';
import Option from '../option';

function Question ({ idQuestion, setIsRefreshParent }) {
    // exam-state
    const [state, dispatch] = useExam()  
    const { type, options, question } = state.exam.questions[idQuestion]  

    // self-state
    const [isRefresh, setIsRefresh] = useState(false)
    useEffect(()=>{}, [isRefresh])

    // function-handle
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
    const _setExamQuestion = (value)=>dispatch(setExamQuestion({idQuestion, value}))

    return (
        <div id={"question"+idQuestion} className={styles.questionBox}>
            <div className={styles.question}>
                <p className={styles.indexs} style={{fontSize: 18}}><strong>{idQuestion+1}.</strong></p>
                <PEditable 
                initValue={question} 
                notify='Enter question' 
                onBlur={_setExamQuestion} 
                fontSize={18}
                />
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
                <TypeSwitch onChange={handleChangeSwitch} checked={type==='radio'}/>
                <button onClick={handleAddButton} type="button" className="pointer">Option Add</button>
                <button onClick={handleDeleteButton} type="button" className="pointer">Delete</button>
            </div>
        </div>
    )
}

export default Question