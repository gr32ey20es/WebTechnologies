import React, { useState } from "react";
import "../Login/TheLogin";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function TheRegister() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(inputs);
      await axios.post("http://localhost:4000/api/auth/register", inputs);
      navigate("/login");
    } catch (err) {
      setError(err.response.data);
    }
  };
  return (
    <div className="login">
      <div className="login-container">
        <div className="login-content">
          <div className="login-title">
            Đăng ký ngay để trở thành thành viên của Study4 và bắt đầu trải
            nghiệm học tiếng Anh và luyện thi TOEIC/IELTS hiệu quả cùng hàng
            trăm ngàn học viên mỗi ngày.
          </div>
          <div className="login-form">
            <div className="form-group">
              <label htmlFor="username">Tài khoản:</label>
              <input
                required
                type="text"
                id="username"
                name="username"
                placeholder="Nhập tài khoản"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                required
                type="email"
                id="email"
                name="email"
                placeholder="Nhập email"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password"> Mật khẩu:</label>
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
            <button onClick={handleSubmit}> Đăng Ký</button>
          </div>
          <div className="login-footer">
            <a href="/login">Bạn đã có tài khoản? Đăng nhập ngay!</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheRegister;