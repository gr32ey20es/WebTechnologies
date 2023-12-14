import React, { useEffect, useState } from "react";

import "./Dashboard.css";
import TheNavbar from "../../component/TheNavbar/TheNavnar.jsx";

export default function TeacherDashboard() {
  return (
    <div className="dashboard-container">
      <div className="nav-left">
        <TheNavbar />
      </div>
      <div className="dashboard-content">
        <h4>Dashboard Teacher</h4>
      </div>
    </div>
  );
}
