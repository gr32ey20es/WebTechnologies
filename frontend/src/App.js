import { AssignmentOnline } from "./assignment";
import { Teacher } from "./assignment/teacher";
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  Outlet,
} from "react-router-dom";

const Layout = () => {
  return (
    <>
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
        path: "/assignment",
        element: <AssignmentOnline />,
      }, 
      {
        path: "/teacher",
        element: <Teacher />,
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
	path: "/assignment",
	element: <AssignmentOnline />,
  },
  {
    path: "/teacher",
    element: <Teacher />,
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
