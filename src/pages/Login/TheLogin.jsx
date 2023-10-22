import React from "react";
import "./TheLogin.css";

function TheLogin() {
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
              <label htmlFor="username">Tài khoản:</label>
              <input type="text" id="username" placeholder="Nhập tài khoản" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Mật khẩu:</label>
              <input
                type="password"
                id="password"
                placeholder="Nhập mật khẩu"
              />
            </div>
          </div>
          <div className="login-btn">
            <button>Đăng nhập</button>
          </div>
          <div className="login-footer">
            <a href="/register">Bạn chưa có tài khoản? Đăng ký ngay!</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheLogin;
