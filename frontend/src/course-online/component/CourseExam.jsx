import { useNavigate,useLocation } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, use  } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


const CourseExamContent = () => {
  //Get ExamID
  const location = useLocation();
  const examID = location?.state?.examID;
  console.log('ExamID:' + examID);
  const [examData, setExamData] = useState([]);
  //Fetch examData
    return (
        <div className="container mt-4">

        </div>
      );
};
export default CourseExamContent;