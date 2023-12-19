import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import ReactSearchBox from "react-search-box";
import { useNavigate } from 'react-router-dom';
import { BarChart } from '@mui/x-charts/BarChart';

import './customlibrary/basic.css';
import styles from './.module.css';

import Edit from './img/edit.svg';
import Chart from './img/chart.svg';
import Delete from './img/delete.png';

function ExamsManager({ courseData, examData }) {
    // self-state
    const [listExams,] = useState(examData);
    const [listScores, setListScores] = useState({})
    const [listStudents, setListStudents] = useState();
    const [,setRefresh] = useState(false)
    const navigate = useNavigate();
    let UserId = null;
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            let response = await axios.get(`http://localhost:4000/api/scores`); 
            setListScores(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
          try {
            let response = await axios.get(`http://localhost:4000/api/students`);
            let data = response.data.map(item => {
                return {
                    key: item.UserId,
                    value: item.StudentCode
                };
            });
            setListStudents(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

      const handleDeleteClick = (e) => {
        e.preventDefault()

        let results = window.confirm("Delete?");
        if(!results) return false;

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
    
    const handleAdd = () => {
        let results = window.confirm("Add?");
        if(!results) return false;

        const addStudent = async () => {
            try {
                const data= {UserId, CourseID: courseData.CourseID}

                await axios.post('http://localhost:4000/api/enrollments', data, 
                    { headers: { 'Content-Type': 'application/json' }})
            } catch (error) {
                console.error(error);
            }
        }

        if(UserId) addStudent();
        UserId = null;
    }
    const listVariants = {
        open: { opacity: 1, y: "0vh" },
        closed: { opacity: 0, y: "-10vh" },
    };
    
    const [data, setData] = useState(false);
    const [label, setLabel] = useState(false)
    
    const handleChartClick = (e) => {
        const ExamID = e.target.alt;
        const MaxScore = e.target.name;
        
        const temp = []
        for (var i = 0; i <= MaxScore; i++) temp.push(i);
        setLabel([...temp])

        for (i = 0; i <= MaxScore; i++) temp[i] = 0;

        for(let i=0; i<listScores.length; i++)
            if(listScores[i].ExamID === parseInt(ExamID)) {
                temp[listScores[i].Score]++;}
        
        setData(temp);
    }

    function UI() {
        return !listExams ? <></> :
        <motion.div variants={listVariants}>

            <div className="kimcenter" style={{width: '100%'}}>
                <div className="kimcenter" style={{border: '1px solid black', borderRadius:'5px', width:'500px', margin: '0 0 20px 0'}}>
                    <button className={'kimpointer '+styles.buttonCreate} onClick={handleAdd} >Add</button>
                    <ReactSearchBox placeholder="Student Code"
                        style={{width: '75%'}}
                        data={listStudents}
                        onSelect={(record) => {UserId = record.item.key}}
                    />
                </div>
            </div>
            <div style={{display: "flex"}}>
                {data ? <BarChart
                width={500}
                height={300}
                series={[{ data: data, type: 'bar', label: 'Number of students', id: 'pvId', stack: 'total' }]}
                xAxis={[{ data: label, scaleType: 'band' }]}
                >
                </BarChart> : null }
                <div className={"kimcenter kimcolumn "+styles.listExams} variants={listVariants}> 
                    <div className={"kimcenter " + styles.table_header}>
                        <div className="kimcenter" style={{width:'75%'}} >Title</div>
                        <div className="kimcenter" style={{width:'25%'}} >Action</div>
                    </div>
                    { listExams.map((exam, index) => 
                    <div key={index} className={"kimcenter " + styles.exam}>
                        <div className={styles.title}>
                            <strong>{index + 1}.</strong> &nbsp;
                            {exam.title}
                        </div>
                        <div className={"kimcenter " + styles.operator}>
                            <img className='kimpointer' alt={exam.ExamID} name={exam.questions.questions.length} src={Chart} onClick={handleChartClick}/>
                            <img className='kimpointer' alt="" src={Edit} onClick={()=>{navigate('/exam/edit/0/' + exam.ExamID)}}/>
                            <img className='kimpointer' alt={exam.ExamID} src={Delete} onClick={handleDeleteClick}/>
                        </div>
                    </div>
                    )}
                    <button className={'kimpointer '+styles.buttonCreate} onClick={()=>{navigate('/exam/edit/' + courseData.CourseID + '/0')}}>Create</button>
                </div>
            </div>
        </motion.div>
    }

    return <UI />
}

export default ExamsManager