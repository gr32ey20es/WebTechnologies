import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./TheLogin.css";
import { AuthContext } from "../../context/authContext";
const TheLogin = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const { login,currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!inputs.email || !inputs.password) {
      setError("Vui lòng nhập tên người dùng và mật khẩu");
      return;
    }
    try {
      await login(inputs);
      if (currentUser && currentUser.RoleId === 1) {
        navigate("/dashboard");
      } else if (currentUser && currentUser.RoleId === 2) {
        navigate("/");
      }
    } catch (err) {
      setError("Đã xảy ra lỗi khi đăng nhập");
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-content">
          <div className="login-title">
            Đăng nhập ngay để bắt đầu trải nghiệm học tiếng Anh và luyện thi
            TOEIC/IELTS hiệu quả cùng hàng trăm ngàn học viên mỗi ngày.
          </div>
          <div className="login-form">
            <div className="form-group">
              <label htmlFor="email">Tài khoản:</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Nhập tài khoản"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Mật khẩu:</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Nhập mật khẩu"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="login-btn">
            <button onClick={handleSubmit}>Đăng nhập</button>
          </div>
          <div className="login-footer">
            <Link to="/register">Bạn chưa có tài khoản? Đăng ký ngay!</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheLogin;