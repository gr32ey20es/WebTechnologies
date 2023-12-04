import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "./Menu";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../login/context/authContext";

const Single = () => {
  const [post, setPost] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();
  const postId = location.pathname.split("/")[3];

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/blog/:${postId}`);
        setPost(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/blog/${postId}`);

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-9">
            <img
              src={post?.img}
              // src="https://thuelens.com/wp-content/uploads/2020/08/iStock-517188688.jpg"
              alt="trom"
              style={{ width: "100%", height: "500px" }}
            ></img>
            <div className="card-body" style={{ display: "flex" }}>
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                alt="avatar"
                className="rounded-circle img-fluid"
                style={{ width: 50 }}
              />
              <div className="info" style={{ display: "inline-block" }}>
                <span className="my-3" style={{ fontWeight: "bold" }}>
                  {post.username}
                </span>
                <p style={{}} className="mb-1">
                  Posted ${post.date}
                </p>
              </div>
              {currentUser === post.username && (
                <div>
                  <Link to={`/blog/write?edit=2`} state={post}>
                    <img
                      style={{ width: 50 }}
                      src="https://cdn-icons-png.flaticon.com/512/6324/6324826.png"
                      alt="edit"
                    ></img>
                  </Link>
                  <Link>
                    <img
                      onClick={handleDelete}
                      style={{ width: 50 }}
                      src="https://cdn-icons-png.flaticon.com/512/3687/3687412.png"
                      alt="delete"
                    ></img>
                  </Link>
                </div>
              )}
              {/* <p className="mb-4">Address: Software</p>
              <div className="d-flex justify-content-center mb-2">
                <button type="button" className="btn btn-primary">
                  Information
                </button>
                <button type="button" className="btn btn-outline-primary ms-1">
                  Message
                </button>
              </div> */}
            </div>
            <hr></hr>
            <h1>
              {post.title}
            </h1>
            <p>
              {post.desc}
            </p>
          </div>

          <div className="col-3">
            <Menu />
          </div>
        </div>
      </div>
    </>
  );
};

export default Single;
