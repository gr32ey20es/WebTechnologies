import { Route, Routes, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import './customlibrary/basic.css';
import styles from './.module.css';
import Exam from "./exam";
import Edit from './img/edit.svg';

function User() {
    // self-state
    const [listExams, setListExams] = useState();

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

    useEffect(() => {fetchData()}, []);

    function UI() {
        return !listExams ? <></> :
        <div className={"center column "+styles.listExams}>
            <div className={"center " + styles.table_header}>
                <div className="center" style={{width:'75%'}} >Assignment</div>
                <div className="center" style={{width:'25%'}} >Status</div>
            </div>
            { listExams.map((exam, index) => 
            <div key={index} className={"center " + styles.exam}>
                <div className={styles.title}>
                    <strong>{index + 1}.</strong> &nbsp;
                    {exam.title}
                </div>
                <div className={"center " + styles.operator}>
                    <Link to={''+ exam.id} className="center" style={{width: '20px'}}>
                        <img className='pointer' alt="" src={Edit}/>
                    </Link>
                </div>
            </div>
            )}
            <div className={'pointer '+styles.buttonCreate}></div>
        </div>
    }

    return <>  
        <Routes>
            <Route path="/" element={<UI />} />
            <Route path="/:examId" element={<Exam />} />
        </Routes>
    </>
}

export default User