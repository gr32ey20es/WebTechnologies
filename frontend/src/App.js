import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import { AuthContext } from "./context/authContext.js";
import TheHeader from "./component/TheHeader/TheHeader";
import TheLogin from "./pages/Login/TheLogin";
import TheRegister from "./pages/Register/TheRegister";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import TeacherDashboard from "./pages/Dashboard/TeacherDashboard.jsx";
import TheHome from "./pages/Home/TheHome.jsx";
import HeaderAdmin from "./component/TheHeader/HeaderAdmin.jsx";
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
          <Route path="/register" element={<TheRegister />} />
          <Route
            path="/dashboard"
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
