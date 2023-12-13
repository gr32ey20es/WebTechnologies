import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import CourseExamContent from './CourseExam';
const CourseDetail = ({ match }) => {
  const location = useLocation();
  console.log(location);
  const courseID = location?.state?.courseID;
  const [courseData, setCourseData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!courseID) {
          throw new Error('Course ID not found in the location state');
        }

        const response = await fetch(`http://localhost:4000/api/courses/${courseID}`);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setCourseData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [courseID]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!courseData) {
    return <div>No data found for the given course ID</div>;
  }

  // Render your component using the courseData

  return (
    <div>
      <CourseExamContent/>
    </div>
  );
};

export default CourseDetail;
