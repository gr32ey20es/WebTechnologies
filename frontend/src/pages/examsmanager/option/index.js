import { setExamOption, setExamAnswer, delExamOption } from "../provider/actions"
import { useExam } from "../provider"
import styles from './.module.css';
import PEditable from '../customlibrary/peditable';
import '../customlibrary/basic.css';
import Delete from '../img/delete.png';

function Option ({ idOption, idQuestion, setIsRefreshParent }) {
    // exam-state
    const [state, dispatch] = useExam()
    const { type, options, answers } = state.exam.questions[idQuestion]  
    
    // function-handle
    const handleInputChange = () => {
        dispatch(setExamAnswer({idQuestion, idOption, type}))
        setIsRefreshParent(prev => !prev)
    }
    const handleImgClick = () => {
        dispatch(delExamOption({idQuestion, idOption}))
        setIsRefreshParent(prev => !prev)
    }
    const _setExamOption = (value)=>dispatch(setExamOption({idQuestion, idOption, value}))

    return <>
        <label className={styles.options}>
            <div style={{order: 1, width: '100%'}}>
                <PEditable initValue={options[idOption]} 
                notify='Enter option' 
                onBlur={_setExamOption}
                />
            </div>
            <div className={"center " + styles.inputs}>
                <input 
                    type={type}
                    onChange={handleInputChange}
                    className={styles.inputOption}
                    checked={answers.includes(idOption)} />
            </div>
            <div className={"center " + styles.bins}>
                <img className='pointer' alt='' src={Delete} onClick={handleImgClick}/>
            </div>
        </label>
    </>
}

export default Option