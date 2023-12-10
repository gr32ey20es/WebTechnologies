import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom";

const CourseDetail = ({ match }) => {
    const location = useLocation();
    const courseID = location?.state?.courseID;
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`http://localhost:4000/api/courses/${courseID}`);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
    
    

    console.log(location);
    // Use the match.params to get the course ID from the URL
    // Fetch course data based on the courseId and render it
    // ...
  
    return (
      <div>
        <h2>Single Course Page</h2>
        <p>{courseID}</p>
        {/* Render course details */}
        {/* ... */}
      </div>
    );
  };


export default CourseDetail
