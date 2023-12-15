import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { ExamProvider } from "../provider"
import Aside from "../aside"
import Form from "../form"
import '../customlibrary/basic.css'

function Exam() {
    const [isRefresh, setIsRefresh] = useState(false)
    useEffect(()=>{}, [isRefresh])
    const { examId } = useParams()

    return(
        <ExamProvider examId={examId}>
        <div className="center" style={{backgroundColor: '#f8f8ff90'}}>
            <Aside setIsRefreshParent={setIsRefresh}/>
            <Form examId={examId} setIsRefreshParent={setIsRefresh}/>
        </div>
        </ExamProvider>
    )
}

export default Exam;