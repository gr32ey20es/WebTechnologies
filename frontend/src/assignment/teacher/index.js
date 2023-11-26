import { Route, Routes, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Exam from "./exam";
import axios from "axios";
import './basic.css'
import styles from './ui.module.css'
import Bin from './option/bin.png'
import Edit from './edit.svg'

function Teacher() {
    const [listExams, setListExams] = useState();
    const [refresh, setRefresh] = useState(false)

    async function fetchData() {
        try {
            const response = await axios.get('http://localhost:4000/api/exams', {
                headers: {'Content-Type': 'application/json'}
            });
            setListExams(response.data);
        } catch (error) {
            console.error(error);
        }
    }
      
    useEffect(() => {
        fetchData();
    }, [refresh]);
    
    const handleBinClick = (e) => {
        const deleteExam = async () => {
            const id = e.target.alt
            try {
                await axios.delete('http://localhost:4000/api/exams/'+id, {
                    headers: {'Content-Type': 'application/json'}
                });
            } catch (error) {
                console.error(error);
            }
        }
        deleteExam();
        setRefresh(prev => !prev);
    }

    function UI() {
        return !listExams ? <></> :
        <div className={"center column "+styles.listExams}>
            { listExams.map((exam, index) => 
            <div key={index} className={"center " + styles.exam}>
                <div className={styles.title}>{exam.title}</div>
                <div className={"center " + styles.operator}>
                    <Link to={'edit/'+ exam.id} className="center" style={{width: '20px'}}>
                        <img alt="" src={Edit}/>
                    </Link>
                    <img alt={exam.id} src={Bin} onClick={handleBinClick}/>
                </div>
            </div>
            )}
            <Link to="edit/0"><button className={styles.buttonCreate}>Create</button></Link>
        </div>
    }

    return <>  
        <Routes>
            <Route path="/" element={<UI />} />
            <Route path="/edit/:examId" element={<Exam />} />
        </Routes>
    </>
}

export default Teacher