import { useState } from "react";
import styles from './questionbox.module.css';

function QuestionBox({ questionContent }) {
    const { type, question, options } = questionContent;
    const [checked, setChecked] = useState( () => {
        return (type === "radio") ? 0 : [];
    });

    const handleChecked = (index) => {
        if (type === "radio")
            setChecked(index);
        else {
            let isChecked = checked.includes(index)
            if(!isChecked)
                setChecked(prev => [...prev, index].sort())
            else
                setChecked(prev => prev.filter(item => item !== index))
        }
    }

    return(
        <fieldset className={styles.choiceBox}>
            <legend className={styles.legendChoicebox}>Question</legend>
            <p>{question}</p>
            {options.map( (option, index) => 
            <label key={index} className={styles.optionBox}>
                <input type={type} className={styles.optionInput}
                onChange={ ()=>{handleChecked(index)} }
                checked={ 
                    (type === "radio") ? (checked === index) : checked.includes(index)
                }/>
                <p>{option}</p>
            </label>
            )}
        </fieldset>
    )
}

export default QuestionBox;