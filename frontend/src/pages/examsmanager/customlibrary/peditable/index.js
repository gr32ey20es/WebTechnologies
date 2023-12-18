import TextareaAutosize from 'react-textarea-autosize';
import { useState, useRef, useEffect } from 'react';
import styles from './.module.css';

export default function PEditable ({
    initValue = '',
    onBlur = ()=>{},
    notify = 'Enter this field...',
    fontSize = '16px'
})
{
    // self-state
    const [value, setValue] = useState(initValue)
    const [isEditing, setIsEditing] = useState(true);

    // height-state
    const textareaRef = useRef();
    const [height, setHeight] = useState()

    // effect
    useEffect(()=>{setIsEditing(false)}, [])

    // function-handle
    const handleBlur = () => {
        setIsEditing(false)
        setHeight(textareaRef.current.offsetHeight);
        /^\s*$/.test(value) ? setValue('') : onBlur(value);
    }
    const handleClick = () => setIsEditing(true)
    const handleChange = (e) => setValue(e.target.value)
    const handleKeyDown = (e) => e.keyCode === 13 && handleBlur();


    return (<>
        <div className={`center ${styles.peditable}`} >
            { isEditing  ? 
            <TextareaAutosize 
                autoFocus
                value={value}
                ref={textareaRef}
                onBlur={handleBlur}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                style={{fontSize}}
                className={styles.textarea} 
            /> :
            <p onClick={handleClick} style={{height, fontSize}}>
                {value ? value : notify}
            </p>
            }
        </div>
        </>
    );

}