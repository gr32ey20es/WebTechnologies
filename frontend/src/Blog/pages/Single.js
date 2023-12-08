import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "./Menu";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../login/context/authContext";

const Single = () => {
  const [post, setPost] = useState([]);

  const location = useLocation();
  // const navigate = useNavigate();
  const postId = location.pathname.split("/")[3];
  const navigate = useNavigate();

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    // console.log(postId);
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/api/postBlog/blog/${postId}`
        );
        setPost(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    console.log("Delete");
    try {
      await axios.delete(`http://localhost:4000/api/postBlog/blog/${postId}`);
    } catch (error) {
      console.log(error);
    }
    navigate("/blog/homepage");
  };

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

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
                src="https://htmlcolorcodes.com/assets/images/colors/green-color-solid-background-1920x1080.png"
                alt="avatar"
                className="rounded-circle img-fluid"
                style={{ width: 50, display: "inline-block", margin: "5px" }}
              />
              <div className="info" style={{ display: "inline-block" }}>
                <span className="my-3" style={{ fontWeight: "bold" }}>
                  {post?.Email}
                </span>
                <p style={{ fontStyle: "italic" }} className="mb-1">
                  Posted {post?.date}
                </p>
              </div>
              {/* {currentUser === post.username  */}
              { true
              && (
                <div>
                  <Link to={`/blog/write?edit=${postId}`} state={post}>
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
            <h1>{getText(post.title)}</h1>
            <p style={{ textAlign: "left" }}>
              {getText(post.desc)}
              <br></br>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
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
