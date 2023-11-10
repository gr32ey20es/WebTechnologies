import { QuestionBox } from "../questionbox"
import '../basic.css'
import styles from './ui.module.css'
import Circle from './circle.png'

function UI ({ formObject, userForm, currentBox, onShift, onBoxChange, handleFormSubmit }) {
    const nformObject = formObject.length
    
    const QuestionBoxs = () => {
        let maxQuestion = Math.min(currentBox + 5, nformObject);
        let questionBoxs = [];

        for(let id=currentBox; id < maxQuestion; id++) {
            questionBoxs.push(
                <QuestionBox key={id} 
                    questionObject={formObject[id]} 
                    initChecked={userForm[id]}
                    onBoxChange={onBoxChange}
                />
            )
        }

        return questionBoxs
    }    

    return <>
        <form 
            id="userForm"
            className={styles.userForm}
            onSubmit={handleFormSubmit}
        >{QuestionBoxs()}
        </form>
        <footer className={"center "+styles.footer}>
            <div>
                <img src={Circle} alt="" width='37px' className={styles.logo}/>
            </div>
            <div className={styles.shift}>
                <button 
                    value="prev" 
                    onClick={onShift}
                    disabled={currentBox === 0} 
                >Previous</button>
                <button 
                    value="next" 
                    onClick={onShift}
                    disabled={currentBox >= nformObject - 5} 
                >Next</button>
            </div>
            <div>
                <button form="userForm" type="submit">Submit</button>
            </div>
        </footer>
    </>
}

export default UI