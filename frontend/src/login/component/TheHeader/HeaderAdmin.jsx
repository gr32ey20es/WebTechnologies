import React from "react";
import "./TheHeader.css";
import Logo from "../../img/logo_full_sm.png";
import { AuthContext } from "../../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import Button from "@mui/material/Button";
import Chip from '@mui/material/Chip';

function HeaderAdmin() {
  const navigate = useNavigate();

  const { currentUser, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
    navigate("/"); // Redirect to "/" after logout
  };

  let roleLabel = '';
  if (currentUser && currentUser.RoleId === 1) {
    roleLabel = 'Admin';
  } else if (currentUser && currentUser.RoleId === 3) {
    roleLabel = 'Teacher';
  }

  return (
    <div className="header">
      <div className="header-left">
        <a className="logo" href="/">
          <img src={Logo} alt="Logo" />
        </a>
      </div>
      <div className="header-right">
        <ul className="nav">
          <Link to="/info">{currentUser?.UserName}</Link>
          {roleLabel && <Chip label={roleLabel} />}
          {currentUser && (
            <Link to="/" onClick={handleLogout}>
              <Button variant="contained">Logout</Button>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
}

export default HeaderAdmin;