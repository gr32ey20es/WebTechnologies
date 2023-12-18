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

    console.log(label)
    function UI() {
        return !listExams ? <></> :
        <motion.div variants={listVariants}>

            <div className="center" style={{width: '100%'}}>
                <div className="center" style={{border: '1px solid black', borderRadius:'5px', width:'500px', margin: '0 0 20px 0'}}>
                    <button className={'pointer '+styles.buttonCreate} onClick={handleAdd} >Add</button>
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
                <div className={"center column "+styles.listExams} variants={listVariants}> 
                    <div className={"center " + styles.table_header}>
                        <div className="center" style={{width:'75%'}} >Title</div>
                        <div className="center" style={{width:'25%'}} >Action</div>
                    </div>
                    { listExams.map((exam, index) => 
                    <div key={index} className={"center " + styles.exam}>
                        <div className={styles.title}>
                            <strong>{index + 1}.</strong> &nbsp;
                            {exam.title}
                        </div>
                        <div className={"center " + styles.operator}>
                            <img className='pointer' alt={exam.ExamID} name={exam.questions.questions.length} src={Chart} onClick={handleChartClick}/>
                            <img className='pointer' alt="" src={Edit} onClick={()=>{navigate('/exam/edit/0/' + exam.ExamID)}}/>
                            <img className='pointer' alt={exam.ExamID} src={Delete} onClick={handleDeleteClick}/>
                        </div>
                    </div>
                    )}
                    <button className={'pointer '+styles.buttonCreate} onClick={()=>{navigate('/exam/edit/' + courseData.CourseID + '/0')}}>Create</button>
                </div>
            </div>
        </motion.div>
    }

    return <UI />
}

export default ExamsManager

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

const valueFormatter = (value) => `${value}mm`;