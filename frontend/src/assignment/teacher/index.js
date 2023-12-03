import { Route, Routes, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import './customlibrary/basic.css';
import styles from './.module.css';
import Exam from "./exam";
import Edit from './img/edit.svg';
import Delete from './img/delete.png';

function Teacher() {
    // self-state
    const [listExams, setListExams] = useState();
    const [refresh, setRefresh] = useState(false)

    // function
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
      
    const handleDeleteClick = (e) => {
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

    useEffect(() => {fetchData()}, [refresh]);

    function UI() {
        return !listExams ? <></> :
        <div className={"center column "+styles.listExams}>
            <div className={"center " + styles.table_header}>
                <div className="center" style={{width:'75%'}} >Assignment</div>
                <div className="center" style={{width:'25%'}} >Action</div>
            </div>
            { listExams.map((exam, index) => 
            <div key={index} className={"center " + styles.exam}>
                <div className={styles.title}>
                    <strong>{index + 1}.</strong> &nbsp;
                    {exam.title}
                </div>
                <div className={"center " + styles.operator}>
                    <Link to={'edit/'+ exam.id} className="center" style={{width: '20px'}}>
                        <img className='pointer' alt="" src={Edit}/>
                    </Link>
                    <img className='pointer' alt={exam.id} src={Delete} onClick={handleDeleteClick}/>
                </div>
            </div>
            )}
            <Link to="edit/0">
                <button className={'pointer '+styles.buttonCreate}>Create</button>
            </Link>
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