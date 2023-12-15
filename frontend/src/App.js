import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
<<<<<<< HEAD
import { AuthContext } from "./login/context/authContext.js";
import TheHeader from "./login/component/TheHeader/TheHeader";
import TheLogin from "./login/pages/Login/TheLogin";
import TheRegister from "./login/pages/Register/TheRegister";
import Dashboard from "./login/pages/Dashboard/Dashboard.jsx";
<<<<<<< HEAD
import Homepage from "./homepage/Homepage.js";
// import "./style.scss";
import "./App.css";

import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  Outlet,
} from "react-router-dom";
import Register from "./Blog/pages/Register.js";
import Login from "./Blog/pages/Login.js";
import Navbar from "./homepage/Navbar/Navbar.js";
import Footer from "./homepage/Footer/Footer.js";
import Home from "./Blog/pages/Home.js";
import Single from "./Blog/pages/Single.js";
import Write from "./Blog/pages/Write.js";
import NavbarBlog from "./Blog/NavbarBlog.js";
=======
import TeacherDashboard from "./login/pages/Dashboard/TeacherDashboard.jsx";
import HeaderAdmin from "./login/component/TheHeader/HeaderAdmin.jsx";
import Course from "./course";
>>>>>>> main

const Layout = () => {
  return (
    <>
      {/* <Navbar /> */}
      <NavbarBlog />
      {/* <TheHeader /> */}
=======
import { AuthContext } from "./context/authContext.js";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Course from "./course/index.jsx";
import Navbar from "./component/Navbar/Navbar.jsx";
import {Login, Register} from "./pages/login_register";
const Layout = () => {
  return (
    <>
      <Navbar />
>>>>>>> main
      <Outlet />
      <Footer />
    </>
  );
};

<<<<<<< HEAD
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/login",
        element: <TheLogin />,
      },
      {
        path: "/register",
        element: <TheRegister />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/homepage",
        element: <Homepage />,
      },
      //////////// DISCUSSION FORUM AND BLOG /////////////
      {
        path: "/blog/homepage",
        element: <Home />,
      },
      // {
      //   path: "/blog/register",
      //   element: <Register />
      // },
      // {
      //   path: "/blog/login",
      //   element: <Login />
      // },
      {
        path: "/blog/post/:id",
        element: <Single />
      },
      {
        path: "/blog/write",
        element: <Write />
      }
      ////////// END DISCUSSION FORUM AND BLOG//////////////
    ],
  },
  {
    path: "/register",
    element: <div>This is Register!</div>,
  },
  {
    path: "/login",
    element: <div>This is Login!</div>,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/homepage",
    element: <Homepage />,
  },
]);
=======
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

>>>>>>> main
function App() {
  return (
      <Router>
        <Layout />
        <Routes>
          <Route path="/" element={<Navigate replace to="/courses" />} />
          <Route path="/courses" element={<Course/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={<PrivateRouteAdmin element={Dashboard} />}
          />
          <Route
            path="/dashboard-teacher"
            element={<PrivateRouteTeacher element={Dashboard} />}
          />
        </Routes>
      </Router>
  );
}

export default App;
<<<<<<< HEAD
<<<<<<< HEAD
=======

// import React from "react";
// import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
// import User from "./assignment/user"
// import Teacher from "./assignment/teacher";

// function TheHome() {
//   return (
//     <div style={{display: 'flex', flexDirection: 'column'}}>
//       <Link to="/u/s/e/r">Go to User</Link>
//       <Link to="/t/e/a/c/h/e/r">Go to Teacher</Link>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route path="/" element={<TheHome />} />
//           <Route path="/u/s/e/r/*" element={<User />} />
//           <Route path="/t/e/a/c/h/e/r/*" element={<Teacher />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;
>>>>>>> main
=======
>>>>>>> main
