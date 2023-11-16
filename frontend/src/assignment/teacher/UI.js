import { useEffect, useState } from 'react';
import { ExamProvider } from "./exam"
import Aside from "./aside"
import Form from "./form"
import './basic.css'

function UI() {
    const [isRefresh, setIsRefresh] = useState(false)
    useEffect(()=>{}, [isRefresh])

    return(
        <ExamProvider>
        <div className="center">
            <Aside setIsRefreshParent={setIsRefresh}/>
            <Form setIsRefreshParent={setIsRefresh}/>
        </div>
        </ExamProvider>
    )
}

export default UI;