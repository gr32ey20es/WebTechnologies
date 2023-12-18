import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import MenuBlog from "./MenuBlog";
// import { AuthContext } from "../../login/context/authContext";

const SingleBlog = () => {
  const [post, setPost] = useState([]);

  const location = useLocation();
  const postId = location.pathname.split("/")[3];
  const navigate = useNavigate();

  // const { currentUser } = useContext(AuthContext);

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

  // const post = {
  //   id: 1,
  //   Email: "tienlam@gmail.com",
  //   title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //   desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //   img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  // };
  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <>
      <div className="container">
        <div className="nav-scroller py-1 mb-3 border-bottom">
          <nav className="nav nav-underline justify-content-between">
          <a className="nav-item nav-link link-body-emphasis active" href="#">ALL</a>
            <a className="nav-item nav-link link-body-emphasis" href="#">SECURITY</a>
            <a className="nav-item nav-link link-body-emphasis" href="#">DATA</a>
            <a className="nav-item nav-link link-body-emphasis" href="#">AWS</a>
            <a className="nav-item nav-link link-body-emphasis" href="#">SOFTWARE</a>
            <a className="nav-item nav-link link-body-emphasis" href="#">DESIGN</a>
            <a className="nav-item nav-link link-body-emphasis" href="#">HARDWARE</a>
            <Link to={`/blog/write`}>
              <button className="btn btn-success">Write</button>
            </Link>
          </nav>
        </div>
        <div className="row g-5">
          <div className="col-md-9">
            <img
              src={post?.img}
              // src="https://thuelens.com/wp-content/uploads/2020/08/iStock-517188688.jpg"
              alt="trom"
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            ></img>
            <div className="card-body" style={{ display: "flex" }}>
              <img
                src="https://www.axpo.com/it/en/home/activities/100--green-energy/_jcr_content/root/stage/stagev1/image1.coreimg.82.1280.jpeg/1584022105053/image.desktop.size-xl.sme-greenoption-xl1280x720.jpeg"
                alt="avatar"
                className="rounded-circle img-fluid shadow-4"
                style={{ width: 45, display: "inline-block", margin: "5px" }}
              />
              <div className="info" style={{ display: "inline-block" }}>
                <span className="my-3" style={{ fontWeight: "bold" }}>
                  {post?.Email}
                </span>
                <p
                  style={{ fontStyle: "italic" }}
                  className="mb-1 blog-post-meta"
                >
                  Posted {post?.date}
                </p>
              </div>
              {/* {currentUser === post.username  */}
              {true && (
                <div className="d-flex justify-content-end">
                  <Link to={`/blog/write?edit=${postId}`} state={post}>
                    {/* <img
                      style={{ width: 50 }}
                      src="https://cdn-icons-png.flaticon.com/512/6324/6324826.png"
                      alt="edit"
                    ></img> */}
                    <button
                      className="btn btn-success"
                      style={{ marginLeft: "5px" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-pencil-square"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path
                          fill-rule="evenodd"
                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                        />
                      </svg>
                    </button>
                  </Link>
                  <Link>
                    <button
                      type="button"
                      data-toggle="modal"
                      data-target="#deleteModal"
                      className="btn btn-outline-danger"
                      style={{ marginLeft: "5px" }}
                    >
                      {/* <img
                      
                      style={{ width: 50 }}
                      src="https://cdn-icons-png.flaticon.com/512/3687/3687412.png"
                      alt="delete"
                    ></img> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-trash3"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                      </svg>
                    </button>
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

              {/* MODAL */}
              <div
                className="modal fade"
                id="deleteModal"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        {post?.title}
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      Do you want to delete this post?
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={handleDelete}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr></hr>
            <article className="blog-post">
              <h2 className="display-5 link-body-emphasis mb-1">
                {getText(post.title)}
              </h2>
              <p style={{ textAlign: "left" }}>
                {getText(post.desc)}
                <br></br>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32.
              </p>
            </article>
          </div>

          <div className="col-md-3">
            <div className="position-sticky" style={{ top: "2rem" }}>
              <div className="p-4 mb-3 bg-body-tertiary rounded">
                <h4 className="fst-italic">
                  Các bài viết nổi bật bạn không nên bỏ lỡ
                </h4>
                <p className="mb-0">
                  Hàng tuần, Website sẽ gửi bạn tổng hợp những bài viết đáng đọc
                  nhất tuần qua.
                </p>
              </div>
              <div>
                <h4 className="fst-italic">Recent posts</h4>
                <hr></hr>
                <ul className="list-unstyled">
                  <MenuBlog />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer
        className="py-5 text-center text-body-secondary bg-body-tertiary"
        style={{ marginTop: "20px" }}
      >
        <p>Thanks for reading</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
</svg>
      </footer>
      
    </>
  );
};

export default SingleBlog;
