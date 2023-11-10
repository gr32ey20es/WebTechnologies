import "./App.css";
import TheHeader from "./component/TheHeader/TheHeader";
import TheLogin from "./pages/Login/TheLogin";
import TheRegister from "./pages/Register/TheRegister"
import Dashboard from "./pages/Dashboard/Dashboard.jsx"
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  Outlet,
} from "react-router-dom";

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
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
