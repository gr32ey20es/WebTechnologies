import TheHeader from "./login/component/TheHeader/TheHeader";
import TheLogin from "./login/pages/Login/TheLogin";
import TheRegister from "./login/pages/Register/TheRegister";
import Dashboard from "./login/pages/Dashboard/Dashboard.jsx";
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
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
