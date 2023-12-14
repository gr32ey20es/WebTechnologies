import React, { useContext } from "react";

import "./TheNavbar.css";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import { AuthContext } from "../../context/authContext";

function TheNavbar() {
  const { currentUser } = useContext(AuthContext);
  const isAdmin = currentUser && currentUser.RoleId === 1;
  const isTeacher = currentUser && currentUser.RoleId === 3;
  return (
    <div className="navbar">
      <div className="navbar-container">
        {isAdmin && (
          <>
            <a className="navbar-item" href="/dashboard">
              <SpaceDashboardOutlinedIcon />
              <span>Dashboard</span>
            </a>
          </>
        )}
        {isTeacher && (
          <>
            <a className="navbar-item" href="/dashboard-teacher">
              <SpaceDashboardOutlinedIcon />
              <span>Dashboard</span>
            </a>
          </>
        )}
      </div>
    </div>
  );
}

export default TheNavbar;
