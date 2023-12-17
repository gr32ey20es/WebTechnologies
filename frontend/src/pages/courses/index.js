import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from "../../context/authContext.js";
import { AnimatePresence } from "framer-motion";

import MyCourse from "../mycourse"
import Course from "../course";
import CourseEdit from './CourseEdit.js';
import './index.css'

const Courses = ({ isMyCourses }) => {
  const [courseData, setCourseData] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const [, setLoading] = useState(true);
  const [, setError] = useState(null);

  // Fetch
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if(isMyCourses)
          response = await axios.get(`http://localhost:4000/api/usercourses/${currentUser.UserId}`);
        else 
          response = await axios.get('http://localhost:4000/api/courses');

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

  /* */
  const [isEdit, setEdit] = useState(false);

  const openEdit = () => {
    setEdit(true);
  };

  const closeEdit = () => {
    setEdit(false);
  };

  return(
    <>
      {currentUser?.RoleId === 3 && isMyCourses?
      <>
        <div className='divButton'>
          <button className="button-89" onClick={openEdit}>Create New Course</button>
        </div>
        <AnimatePresence>
          {isEdit ? <CourseEdit courseData={{UserId: currentUser.UserId}} close={closeEdit} /> : null}
        </AnimatePresence>
      </> : null}

      <div className="properties">
        {courseData.map((item, id) => {
          if(isMyCourses)
            return <MyCourse courseData={item} key={id} />
          else if(id < 6)
            return <Course courseData={item} key={id} />
          else
            return null
        })}
      </div>
    </>
  );
}

export default Courses;