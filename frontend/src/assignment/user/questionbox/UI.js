import styles from './ui.module.css';
import '../basic.css'

function UI ({ questionObject, selectedOption, onOptionChange }) {
    const { id, type, question, options } = questionObject;

    function Question() {
        return <>
            <p><strong>{id+1}. &nbsp;</strong></p>
            <p>{question}</p>
        </>
    }

    function Options() {
        return options.map((option, index) => {
            const value = String.fromCharCode(index + 65)
            const checked = selectedOption.includes(value)
            const style = !checked ? {border: '1.5px solid #FFFFFF'} :
                {border: '1.5px solid #439539', boxShadow: '0px 0px 2px grey', color: '#439539', fontWeight: 600}

            return (
                <label key={index} className={styles.optionBox} style={style}>
                    <input 
                        type={type} 
                        value={value}
                        checked={checked}
                        onChange={onOptionChange}
                        className={styles.optionInput}
                    />
                    <p>{option}</p>
                </label>
        )})
    }

    return (
        <div id={"question"+id} className={styles.questionBox}>
            <div className={styles.question}>{Question()}</div>
            <div className="center column">{Options()}</div>
        </div>
    )
}

export default UI