import React, { useState } from "react";
import "../Login/TheLogin";

function TheLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    // Thực hiện xử lý đăng ký tài khoản tại đây
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
                type="text"
                id="username"
                placeholder="Nhập tài khoản"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Mật khẩu:</label>
              <input
                type="password"
                id="password"
                placeholder="Nhập mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Nhập lại mật khẩu:</label>
              <input
                type="password"
                id="password"
                placeholder="Nhập mật khẩu"
              />
            </div>
          </div>
          <div className="login-btn">
            <button >Đăng Ký</button>
          </div>
          <div className="login-footer">
            <a href="/login">Bạn đã có tài khoản? Đăng nhập ngay!</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheLogin;
