import React from "react";
import "./TheHeader.css";
import Logo from "../../img/logo_full_sm.png";

function TheHeader() {
  return (
    <div className="header">
      <div className="header-left">
        <a class="logo" href="/">
          <img src={Logo} alt="Logo" />
        </a>
      </div>
      <div className="header-right">
        <ul class="nav">
          <a class="nav-link" href="/courses/online/">
            Khoá học online
          </a>

          <a class="nav-link" href="/tests/">
            Đề thi online
          </a>

          <a class="nav-link" href="/flashcards/">
            Flashcards
          </a>
          <a class="nav-link" href="/posts/">
            Blog
          </a>

          <a class="nav-link" href="/courses/activate/">
            Kích hoạt khoá học
          </a>

          <a class="btn-login" href="/login" >
            Đăng nhập
          </a>
        </ul>
      </div>
    </div>
  );
}

export default TheHeader;
