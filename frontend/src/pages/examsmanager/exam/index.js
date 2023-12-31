import './index.css'
import { useEffect, useState } from 'react';
import { ExamProvider } from "../provider"
import Aside from "../aside"
import Form from "../form"
import '../customlibrary/basic.css'

function ExamEdit() {
    const [isRefresh, setIsRefresh] = useState(false)
    useEffect(()=>{}, [isRefresh])

    return(
        <ExamProvider>
        <div className="kimcenter none" style={{backgroundColor: '#f8f8ff90'}}>
            <Aside setIsRefreshParent={setIsRefresh}/>
            <Form setIsRefreshParent={setIsRefresh}/>
        </div>
        </ExamProvider>
    )
}

export default ExamEdit;