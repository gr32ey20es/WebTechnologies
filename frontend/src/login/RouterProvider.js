import "./RouterProvider.css";
import TheHeader from "./component/TheHeader/TheHeader";
import TheLogin from "./pages/Login/TheLogin";
import TheRegister from "./pages/Register/TheRegister"
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
]);

export {RouterProvider, router};
