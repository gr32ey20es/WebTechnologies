import banner from "../../course-online/Image/banner.jpg";
import sub1 from "../Image/sub1.jpg";
import couresImg from "./CourseImages";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, use  } from 'react-router-dom';
import "./banner.css";
import React, { useEffect, useState } from 'react';
import axios from 'axios';





// for (let i = 0; i < couresImg.length; i++) {
//   console.log(couresImg[i]);
//   courseData[i] = {
//     courseID: "it4090",
//     srcImage: couresImg[i],
//     nameCourse: "hahaha",
//     descriptionCourse: "Khoa hoc lap trinh",
//   };
// }



const CourseContent = () => {
  const [courseData, setCourseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //fetch
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/courses');
        console.log(response);
        setCourseData(response.data);
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
          <h2 className="text-align-start">My Courses</h2>
          <h5 className="text-align-start">Course Overview</h5>
        </div>
      </div>
      <div className="content-wrapper">
        <div className="row ">
          {courseData.map((value, index) => (
            <>
              <div className="col-sm-3">
                <div
                  className="card"
                  style={{ width: "18rem", height: "20rem" }}
                >
                  <img
                    src={value.srcImage}
                    className="card-img-top"
                    alt=""
                  ></img>
                  <div className="card-body">
                    <h5 className="card-title">{value.nameCourse}</h5>
                    <p className="card-text">{value.descriptionCourse}</p>
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
