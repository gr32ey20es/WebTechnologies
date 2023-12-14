import React, { useContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import { AuthContext } from "./login/context/authContext.js";
import TheHeader from "./login/component/TheHeader/TheHeader";
import TheLogin from "./login/pages/Login/TheLogin";
import TheRegister from "./login/pages/Register/TheRegister";
import Dashboard from "./login/pages/Dashboard/Dashboard.jsx";
import TeacherDashboard from "./login/pages/Dashboard/TeacherDashboard.jsx";
import HeaderAdmin from "./login/component/TheHeader/HeaderAdmin.jsx";
import Course from "./course";

const Layout = () => {
  return (
    <>
      <TheHeader />
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

  const [,setIsRefresh] = useState(false)
  useEffect(()=>{setIsRefresh(prev => !prev)}, [currentUser]);
  return (
    <div className="App">
      <Router>
        <Layout />
        <Routes>
          <Route path="/*" element={<Course/>} />
          <Route path="/login" element={<TheLogin />} />
          <Route path="/register" element={<TheRegister />} />
          <Route
            path="/dashboard-admin"
            element={<PrivateRouteAdmin element={Dashboard} />}
          />
          <Route
            path="/dashboard-teacher"
            element={<PrivateRouteTeacher element={TeacherDashboard} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
