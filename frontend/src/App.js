import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import { AuthContext } from "./login/context/authContext.js";
import TheHeader from "./login/component/TheHeader/TheHeader.jsx";
import TheLogin from "./login/pages/Login/TheLogin.jsx";
// import TheRegister from "./login/pages/Login/TheRegister";
import Dashboard from "./login/pages/Dashboard/Dashboard.jsx";
import TeacherDashboard from "./login/pages/Dashboard/TeacherDashboard.jsx";
import TheHome from "./login/pages/Home/TheHome.jsx";
import HeaderAdmin from "./login/component/TheHeader/HeaderAdmin.jsx";

import CourseContent from "./course-online/component/Course.jsx";
import CourseDashboard from "./course-online/component/CourseDashboard.jsx";
import CourseDetail from "./course-online/component/CourseDetail.jsx";
import CourseExamContent from "./course-online/component/CourseExam.jsx";

const Layout = () => {
  return (
    <>
      <TheHeader />
      <Outlet />
    </>
  );
};

const AdminLayout = () => {
  return (
    <>
      <HeaderAdmin />

      <Outlet />
    </>
  );
};

const PrivateRouteAdmin = ({ element: Element, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  const hasAccess = currentUser && currentUser.RoleId === 1;

  return hasAccess ? <Element {...rest} /> : <Navigate to="/" />;
};

const PrivateRouteTeacher = ({ element: Element, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  const hasAccess = currentUser && currentUser.RoleId === 3;

  return hasAccess ? <Element {...rest} /> : <Navigate to="/" />;
};

function App() {
  const { currentUser } = useContext(AuthContext);
  const isAdminOrTeacher =
    currentUser && (currentUser.RoleId === 1 || currentUser.RoleId === 3);

  return (
    <div className="App">
      <Router>
        {isAdminOrTeacher ? <AdminLayout /> : <Layout />}
        <Routes>
          <Route path="/" element={<TheHome />} />
          <Route path="/login" element={<TheLogin />} />
          {/* <Route path="/register" element={<TheRegister />} /> */}
          <Route
            path="/dashboard"
            element={<PrivateRouteAdmin element={Dashboard} />}
          />
          <Route
            path="/dashboard-teacher"
            element={<PrivateRouteTeacher element={TeacherDashboard} />}
          />
          <Route path="/courses/online" element={<CourseContent />} />
          <Route path="/dashboard/courses" element={<CourseDashboard />} />
          <Route path="/dashboard/courses/:id" element={<CourseDetail />} />
          <Route path="/dashboard/exam" element={<CourseExamContent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
