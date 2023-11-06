import { useAssessment } from "../assessment"
import { QuestionBox } from "../questionbox"
import { useState } from "react";

function Form() {
    console.log("Form re-render...")

    const [state, ] = useAssessment()
    const formData = state.data.data
    const [currentBoxId, setCurrentBoxId] = useState(0);

    const displayBoxs = () => {
        let maxQuestionId = Math.min(currentBoxId + 3, formData.length);
        let choiceBoxs = [];

        for(let id=currentBoxId; id < maxQuestionId; id++)
            choiceBoxs.push(<QuestionBox key={id} questionContent={formData[id]} />)
        
        return choiceBoxs
    }     

    const handlePrevNext = (e) => {
        e.preventDefault();
        let operator = e.target.value
        setCurrentBoxId(prev => prev + (operator === "prev" ? -3 : 3));
    }

    const handleSubmit = () => {

    }
    return (
        <form onSubmit={handleSubmit}>
            {displayBoxs()}
            <button value="prev" disabled={currentBoxId === 0} 
            onClick={(e) => handlePrevNext(e)}>Prevous</button>
            <button value="next" disabled={currentBoxId > formData.length - 4} 
            onClick={(e) => handlePrevNext(e)}>Next</button>
            <button type="submit">Submit</button>
        </form>
        
    )   
}

export default Form