import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import { AuthContext } from "./context/authContext.js";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Navbar from "./component/navbar/Navbar.jsx";
import {Login, Register} from "./pages/login_register";
import ExamEdit from "./pages/examsmanager/exam";
import Exam from "./pages/exams/exam";
import HomeBlog from "./pages/blog/HomeBlog.js";
import SingleBlog from "./pages/blog/SingleBlog.js";
import WriteBlog from "./pages/blog/WriteBlog.js";
import Courses from './pages/courses'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const PrivateRouteAdmin = ({ element: Element, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  const hasAccess = currentUser && currentUser.RoleId === 1;

  return hasAccess ? <Element {...rest} /> : <Navigate to="/" />;
};

const PrivateRouteUser = ({ element: Element, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  const hasAccess = currentUser && currentUser.RoleId !== 1;

  return hasAccess ? <Element {...rest} /> : <Navigate to="/" />;
};

const PrivateRouteTeacher = ({ element: Element, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  const hasAccess = currentUser && currentUser.RoleId === 3;

  return hasAccess ? <Element {...rest} /> : <Navigate to="/" />;
};


function App() {
  return (
      <Router>
        <Layout />
        <Routes>
          <Route path="/" element={<Navigate replace to="/courses" />} />
          <Route path="/courses" element={<Courses isMyCourses={false}/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={<PrivateRouteAdmin element={Dashboard} />} />
          <Route
            path="/mycourses/*"
            element={<PrivateRouteUser element={Courses} isMyCourses={true} />} />
          <Route
            path="/exam/:examId"
            element={<PrivateRouteUser element={Exam} />} />
          <Route 
            path="/exam/edit/:courseId/:examId" 
            element={<PrivateRouteTeacher element={ExamEdit} />}  />
          <Route path="/blog/homepage" element={<HomeBlog />} />
          <Route path="/blog/post/:id" element={<SingleBlog />} />
          <Route path="/blog/write" element={<WriteBlog />} />
        </Routes>
      </Router>
  );
}

export default App;
