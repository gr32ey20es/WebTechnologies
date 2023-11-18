import React from "react";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import { User } from "./assignment/user"
import Teacher from "./assignment/teacher";

function TheHome() {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <Link to="/user">Go to User</Link>
      <Link to="/teacher">Go to Teacher</Link>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<TheHome />} />
          <Route path="/user" element={<User />} />
          <Route path="/teacher/*" element={<Teacher />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;