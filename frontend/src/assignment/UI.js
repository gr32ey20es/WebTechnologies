import { AssessmentProvider } from "./assessment"
import { Aside } from "./aside"
import { Form } from "./form"
import './basic.css'

function UI() {
    return(
        <AssessmentProvider>
        <div className="center">
            <Aside/>
            <Form/>
        </div>
        </AssessmentProvider>
    )
}

export default UI;