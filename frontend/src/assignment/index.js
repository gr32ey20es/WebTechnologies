import { AssessmentProvider } from "./assessment"
import { Timer } from "./timer"
import { Form } from "./form"

function Assignment() {
    console.log("Assignment re-render...")

    return(
        <AssessmentProvider>
            <Form/>
            <Timer/>
        </AssessmentProvider>
    )
}

export default Assignment;