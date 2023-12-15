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
