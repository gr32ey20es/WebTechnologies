import {
    Routes,
    Route,
} from "react-router-dom";

import CourseContent from "./component/Course.jsx";
import CourseDetail from "./component/CourseDetail.jsx";
import CourseExamContent from "./component/CourseExam.jsx";

const Course = () => {
    return(
        <Routes>
          <Route path="/" element={<CourseContent/>} />
          <Route path="/dashboard/courses/:id" element={<CourseDetail/>} />
          <Route path="/dashboard/exam" element={<CourseExamContent/>} />
        </Routes>
    );
} 

export default Course;