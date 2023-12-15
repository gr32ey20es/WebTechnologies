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
import Course from "./course/index.jsx";
import Navbar from "./component/Navbar/Navbar.jsx";
import { Login, Register } from "./pages/login_register";
import HomeBlog from "./Blog/pages/HomeBlog.js";
import SingleBlog from "./Blog/pages/SingleBlog.js";
import WriteBlog from "./Blog/pages/WriteBlog.js";

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
        <Route path="/courses" element={<Course />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={<PrivateRouteAdmin element={Dashboard} />}
        />
        <Route
          path="/dashboard-teacher"
          element={<PrivateRouteTeacher element={Dashboard} />}
        />
        <Route path="/blog/homepage" element={<HomeBlog />} />
        <Route path="/blog/post/:id" element={<SingleBlog />} />
        <Route path="/blog/write" element={<WriteBlog />} />
      </Routes>
    </Router>
  );
}

export default App;
