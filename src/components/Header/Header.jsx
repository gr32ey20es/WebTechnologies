import React from 'react'

const Header = () => {
  return (
    <div>
        <div className="course-content">
          <div className="course-header" classname="container-fluid">
            <div class="row">
              <div class="col-md-8 text-start pl-3">
                <a id="title" className="p-2 text-dark" href="#">STUDY4</a>
              </div>
              <div class="col-md-4">
                <nav class="navbar navbar-expand-lg navbar-light">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a class="nav-link " href="_blank">
                        Khóa học online
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="_blank">
                        Đề thi online
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="_blank">
                        Blog
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="_blank">
                        Contact
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link bg-primary rounded-4 text-light" href="_blank">
                        Đăng nhập
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Header
