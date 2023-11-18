import { useEffect, useState } from "react";
import UI from './UI'

function Logic({ questionObject, initChecked, onBoxChange}) {
    const [selectedOption, setSelectedOption] = useState(initChecked);
    const { id } = questionObject

    useEffect(() => onBoxChange({
        target: {
            id,
            selectedOption
        }})
    , [selectedOption, onBoxChange, id])

    const onOptionChange = (e) => {
        let target = e.target,
            type = target.type,
            value = target.value

        if (type === "radio")
            setSelectedOption([value]);
        else {
            let isSelected = selectedOption.includes(value)

            if(!isSelected)
                setSelectedOption(prev => [...prev, value].sort())
            else
                setSelectedOption(prev => prev.filter(item => item !== value))
        }
    }
    
    return (
        <UI 
            questionObject={questionObject} 
            selectedOption={selectedOption} 
            onOptionChange={onOptionChange} 
        />
    )
}

export default Logic;