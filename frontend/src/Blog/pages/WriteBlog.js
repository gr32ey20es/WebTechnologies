import React, { useEffect, useState } from "react";
// import ReactQuill from 'react-quill';
// import "frontend/node_modules/react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const WriteBlog = () => {
  const state = useLocation().state;

  const [value, setValue] = useState("");
  const [title, setTitle] = useState(state?.title || "");
  const [desc, setDesc] = useState(state?.desc || "");
  const [imgUrl, setImgUrl] = useState(state?.img || "");
  // const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");
  // const [postId, setPostId] = useState(state?.id || "");

  const navigate = useNavigate();

  useEffect(() => {
    // console.log(state);
    // console.log(cat);
    // console.log(postId);
  });

  // const upload = async () => {
  //   try {
  //     const formData = new FormData();
  //     formData.append("file", file);
  //     console.log(formData);
  //     const res = await axios.post("http://localhost:4000/api/upload", formData);
  //     return res.data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleExist = () => {
    navigate("/blog/homepage");
  };

  const handleClick = async (e) => {
    e.preventDefault();
    // const imgUrl = upload();

    try {
      state
        ? await axios.put(
            `http://localhost:4000/api/postBlog/blog/${state.Id}`,
            {
              title,
              desc,
              cat,
              // img: file ?
              imgUrl,
            }
          )
        : await axios.post(`http://localhost:4000/api/postBlog/blog`, {
            title,
            desc,
            cat,
            // img: file ?
            imgUrl,
          });
      navigate("/blog/homepage");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container">
        <h1 className="fst-italic">Viết bài</h1>
        <div
          className="row"
          style={{ marginTop: "20px", borderRadius: "1px solid black" }}
        >
          <div className="col-md-8">
            <div className="container">
              <div className="" style={{ marginBottom: "5px" }}>
                <svg
                  style={{ display: "inline-block" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-bookmark-plus-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5m6.5-11a.5.5 0 0 0-1 0V6H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V7H10a.5.5 0 0 0 0-1H8.5z"
                  />
                </svg>
                <h3 style={{ display: "inline-block" }}>Title</h3>
              </div>
              <input
                className="input-title"
                type="text"
                style={{
                  border: "2px solid lightgray",
                  width: "100%",
                  height: "50px",
                }}
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="container" style={{ marginTop: "10px" }}>
              <div>
                <svg
                  style={{ marginBottom: "5px" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-file-text-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1m-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5M5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1m0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1" />
                </svg>{" "}
                <h3 style={{ display: "inline-block" }}>Content</h3>
              </div>
              <ReactQuill
                theme="snow"
                value={value}
                onChange={setValue}
                style={{ height: "300px" }}
              />
              {/* <input
                className="form-control"
                style={{ width: "100%", height: "200px" }}
                type="text"
                placeholder="Content"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              /> */}
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="item"
              style={{
                padding: "10px",
                border: "1px solid lightray",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                fontSize: "12px",
              }}
            >
              <div>
                <svg
                  style={{ display: "inline-block" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-file-image"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8l-2.083-2.083a.5.5 0 0 0-.76.063L8 11 5.835 9.7a.5.5 0 0 0-.611.076L3 12z" />
                </svg>
                <h3 style={{ display: "inline-block" }}>Image</h3>
              </div>
              {/* <span>
                <b>Status: </b>Draft
              </span>
              <br></br>
              <span>
                <b> Visibility: </b>Public
              </span> */}
              <br></br>
              {/* <div className="container">
                <input
                  className="form-control"
                  placeholder="Upload Image"
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div> */}
              <div className="container">
                <input
                  className="form-control"
                  placeholder="Image URL"
                  value={imgUrl}
                  onChange={(e) => setImgUrl(e.target.value)}
                />
              </div>
            </div>
            <div
              className="item"
              style={{
                padding: "10px",
                border: "1px solid lightray",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                fontSize: "12px",
              }}
            >
              <div style={{ marginBottom: "15px" }}>
                <svg
                  style={{ display: "inline-block" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-bookmark-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2" />
                </svg>
                <h3 style={{ display: "inline-block" }}>Category</h3>
              </div>

              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <label style={{ marginRight: "20px" }} htmlFor="art">
                      ART
                    </label>
                    <label
                      style={{ display: "inline-block", marginRight: "20px" }}
                      htmlFor="science"
                    >
                      SCIENCE
                    </label>
                    <label
                      style={{ display: "inline-block", marginRight: "20px" }}
                      htmlFor="technology"
                    >
                      TECHNOLOGY
                    </label>
                    <label
                      style={{ display: "inline-block", marginRight: "20px" }}
                      htmlFor="cinema"
                    >
                      CINEMA
                    </label>
                    <label
                      style={{ display: "inline-block", marginRight: "20px" }}
                      htmlFor="design"
                    >
                      DESIGN
                    </label>
                    <label style={{ marginRight: "20px" }} htmlFor="food">
                      FOOD
                    </label>
                  </div>
                  <div className="col-md-8">
                    <div style={{ height: "27px" }}>
                      <input
                        type="radio"
                        checked={cat === "art"}
                        name="cat"
                        value="art"
                        id="art"
                        onChange={(e) => setCat(e.target.value)}
                      />
                    </div>
                    <div style={{ height: "27px" }}>
                      <input
                        type="radio"
                        checked={cat === "science"}
                        name="cat"
                        value="science"
                        id="science"
                        onChange={(e) => setCat(e.target.value)}
                      />
                    </div>
                    <div style={{ height: "27px" }}>
                      <input
                        type="radio"
                        checked={cat === "technology"}
                        name="cat"
                        value="technology"
                        id="technology"
                        onChange={(e) => setCat(e.target.value)}
                      />
                    </div>
                    <div style={{ height: "27px" }}>
                      <input
                        type="radio"
                        checked={cat === "cinema"}
                        name="cat"
                        value="cinema"
                        id="cinema"
                        onChange={(e) => setCat(e.target.value)}
                      />
                    </div>
                    <div style={{ height: "27px" }}>
                      <input
                        type="radio"
                        checked={cat === "design"}
                        name="cat"
                        value="design"
                        id="design"
                        onChange={(e) => setCat(e.target.value)}
                      />
                    </div>
                    <div style={{ height: "27px" }}>
                      <input
                        type="radio"
                        checked={cat === "food"}
                        name="cat"
                        value="food"
                        id="food"
                        onChange={(e) => setCat(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="button">
                <button
                  className="btn btn-danger"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  style={{ marginRight: "15px" }}
                >
                  Close
                </button>

                {/* <!-- Modal --> */}
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex={-1}
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel"></h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="modal-body">Data can be lost?</div>
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
                          className="btn btn-primary"
                          onClick={handleExist}
                        >
                          Exist
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <button>Save as a draft</button> */}
                <button onClick={handleClick} className="btn btn-primary">
                  Public
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WriteBlog;
