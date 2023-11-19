import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <h1>Login</h1>
      <div className="container bg-primary">
        <div className="row">
          <div className="col-md-6 offset-md-3 ">
            <div className="card my-5">
              <div className="card-body cardbody-color p-lg-5">
                <div className="text-center">
                  <img
                    src="https://st.quantrimang.com/photos/image/2021/08/16/Anh-vit-cute-6.jpg"
                    // src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png"
                    className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                    width="200px"
                    alt="profile"
                  />
                </div>
                <form>
                <div className="mb-1" style={{paddingBottom: "10px"}}>
                    {/* <label htmlFor="forEmail" className="form-label">
                        Email
                    </label> */}
                    <input
                    placeholder="Email"
                    type="email"
                    className="form-control"
                    name="email"
                    // value="email"
                    onChange=""
                    />
                </div>
                  {/* <input type="text" placeholder="username"></input> */}
                  {/* <input type="password" placeholder="password"></input> */}
                  <div className="mb-1">
                    {/* <label htmlFor="forEmail" className="form-label">
                        Email
                    </label> */}
                    <input
                    placeholder="password"
                    type="password"
                    className="form-control"
                    name="password"
                    // value="email"
                    onChange=""
                    />
                </div>
                <div className="d-flex flex-row justify-content-between">
                    <p>
                    Not registerd yet ?<span className="fw-bold"> Register
                    <Link style={{textDecoration:"none"}} to="/blog/register"> Here!</Link></span>
                    </p>
                    
                    <button className="btn btn-primary" type="submit">
                        Login
                    </button>
                    </div>
                  {/* <button>Login</button> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
