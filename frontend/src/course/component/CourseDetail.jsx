import React, { useEffect, useState } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import CourseExamContent from './CourseExam';
import axios from 'axios';
const CourseDetail = ({ match }) => {
  const location = useLocation();
  const courseID = location?.state?.courseID;
  const [courseData, setCourseData] = useState([]);
  const [examData,setExamData] = useState([]);
  const [imageData,setImageData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  //
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(`http://localhost:4000/api/images/${courseID}`);
        setImageData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  //
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(`http://localhost:4000/api/courses/${courseID}`);
        setCourseData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  //
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(`http://localhost:4000/api/exams/${courseID}`);
        setExamData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  //
  const navigate = useNavigate();
  const handleSelect = (id) => {

  navigate(`/dashboard/exam`, {
    state: {
      examID: id,
    }
  });
};
  // Render your component using the courseData

  return (
    <div className="container mt-4">
      <div className="row mt-4">
        <div className="col-12">
        <h2 className="text-align-start">Mô tả khóa học</h2>
        {courseData.map((value) => 
        (
          <>
          <p>{value.CourseDescription}</p>
          </>
        ))}
        <h2 className="text-align-start">Thư viện đề thi</h2>
        </div>
      </div>
      <div className="content-wrapper">
        <div className="row ">
          {
            examData.map((value)=>(
              <>
                <div className="col-sm-3">
                  <div
                    className="card"
                    style={{ width: "18rem", height: "20rem" }}
                  >
                    {/* <img
                      src={imageData[0].ImagePath}
                      className="card-img-top"
                      alt=""
                    ></img> */}
                  <img
                    src={require('../Image/sub1.jpg')}
                    className="card-img-top" style={{height:'143px'}}
                    alt=""
                  ></img>
                    <div className="card-body">
                      <h5 className="card-title">{value.ExamName}</h5>
                      <p className="card-text"></p>
                      <button
                        onClick={() => handleSelect(value.ExamID)}
                        className="btn btn-primary"
                      >
                        Enter Exam
                  </button>
                    </div>
                  </div>
                </div>
              </>
            ))
          }
        </div>
      </div>
    </div>
  );
}
export default CourseDetail;
