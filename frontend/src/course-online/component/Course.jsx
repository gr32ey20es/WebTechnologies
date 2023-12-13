import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, use  } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CourseContent = () => {
  const [courseData, setCourseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //fetch
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/courses');
        setCourseData(response.data);
        console.log(courseData);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render


  //Navigate
  const navigate = useNavigate();
  const handleSelect = (id) => {

  navigate(`/dashboard/courses/${id}`, {
    state: {
      courseID: id,
    }
  });
};
  return (
    <div className="container mt-4">
      {/* <div class="row justify-content-center align-items-center g-2">
        <div class="col">
          <img src={banner} alt="123" style={{ width: "100%" }} />
        </div>
      </div> */}

      <div className="row mt-4">
        <div className="col-12">
          <h2 className="text-align-start">Khóa học của tôi</h2>
        </div>
      </div>
      <div className="content-wrapper">
        <div className="row ">
          {courseData.map((value, index) => (
            <>
              <div className="col-sm-3 p-3">
                <div
                  className="card"
                  style={{ width: "18rem", height: "20rem" }}
                >
                  <img
                    src={value.ImagePath}
                    className="card-img-top" style={{height:'143px'}}
                    alt=""
                  ></img>
                  <div className="card-body">
                    <h5 className="card-title">{value.CourseName}</h5>
                    {/* <p className="card-text">{value.CourseDescription}</p> */}
                    <button
                      onClick={() => handleSelect(value.CourseID)}
                      className="btn btn-primary"
                    >
                      Exam
                </button>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CourseContent;
