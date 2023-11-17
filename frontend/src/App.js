import "./App.css";
import TheHeader from "./component/TheHeader/TheHeader";
import TheLogin from "./pages/Login/TheLogin";
import TheRegister from "./pages/Register/TheRegister";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import TheHome from "./pages/Home/TheHome.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/authContext.js";

const Layout = () => {
  return (
    <>
      <TheHeader />
      <Outlet />
    </>
  );
};

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  const hasAccess = currentUser && currentUser.RoleId === 1;

  return hasAccess ? (
    <Element {...rest} />
  ) : (
    <Navigate to="/" />
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        <Layout />
        <Routes>
          <Route path="/" element={<TheHome />} />
          <Route path="/login" element={<TheLogin />} />
          <Route path="/register" element={<TheRegister />} />
          <Route
            path="/dashboard"
            element={<PrivateRoute element={Dashboard} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;