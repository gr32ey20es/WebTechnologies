import TheHeader from "./login/component/TheHeader/TheHeader";
import TheLogin from "./login/pages/Login/TheLogin";
import TheRegister from "./login/pages/Register/TheRegister"
import Dashboard from "./login/pages/Dashboard/Dashboard.jsx";
import Homepage from './homepage/Homepage.js';
import CourseContent from "./course-online/component/Course.jsx";
import CourseDashboard from "./course-online/component/CourseDashboard.jsx";
import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  Outlet,
} from "react-router-dom";
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
      {
        path:"/courses/online",
        element:<CourseContent/>
      },
      {
        path:"/dashboard/courses",
        element:<CourseDashboard/>,
        
      },
      {
        path:"/dashboard/courses/:id",
        element:<CourseDetail/>
      },
      {
        path:"/dashboard/exam/",
        element:<CourseExamContent/>
      }

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