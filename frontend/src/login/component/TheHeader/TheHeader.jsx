import React from "react";
import "./TheHeader.css";
import Logo from "../../img/logo_full_sm.png";
import { AuthContext } from "../../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import Button from "@mui/material/Button";

function TheHeader() {
  const navigate = useNavigate();

  const { currentUser, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
    navigate("/"); // Redirect to "/" after logout
  };
  return (
    <div className="header">
      <div className="header-left">
        <a className="logo" href="/">
          <img src={Logo} alt="Logo" />
        </a>
      </div>
      <div className="header-right">
        <ul className="nav">
          {currentUser && currentUser.RoleId === 1 ? 
          <a className="nav-link" href="/dashboard-admin">
            Dashboard
          </a> : null}
          <a className="nav-link" href="/courses/">
            Khoá học
          </a>

          <a className="nav-link" href="/posts/">
            Blog
          </a>
        
          <span>
            <Link to="/info">{currentUser?.UserName}</Link>
          </span>
          {currentUser ? (
            <Link to="/" onClick={handleLogout}>
              <Button variant="contained">Logout</Button>
            </Link>
          ) : (
            <span className="content">
              <Link to="/login">
                <Button variant="contained">Login</Button>
              </Link>
              <Link to="/register">
                <Button variant="contained">Register</Button>
              </Link>
            </span>
          )}
        </ul>
      </div>
    </div>
  );
}

export default TheHeader;
