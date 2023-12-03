import React from "react";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import User from "./assignment/user"
import Teacher from "./assignment/teacher";

function TheHome() {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <Link to="/u/s/e/r">Go to User</Link>
      <Link to="/t/e/a/c/h/e/r">Go to Teacher</Link>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<TheHome />} />
          <Route path="/u/s/e/r/*" element={<User />} />
          <Route path="/t/e/a/c/h/e/r/*" element={<Teacher />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;