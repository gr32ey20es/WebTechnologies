import React, { useEffect, useState } from "react";
// import ReactQuill from 'react-quill';
// import "frontend/node_modules/react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Write = () => {
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
  const handleClick = async (e) => {
    e.preventDefault();
    // const imgUrl = upload();

    try {
      state
        ? await axios.put(`http://localhost:4000/api/postBlog/blog/${state.Id}`,
            {
              title,
              desc,
              cat,
              // img: file ?
              imgUrl
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
      <h1>Create your post</h1>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              style={{ padding: "10px", border: "1px solid lightray" }}
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="container" style={{ marginTop: "10px" }}>
              {/* <ReactQuill theme="snow" value={value} onChange={setValue} /> */}
              <input
                className="form-control"
                style={{ width: "100%", height: "200px" }}
                type="text"
                placeholder="Content"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
          </div>
          <div className="col-6">
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
              <h1>Publish</h1>
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
              <h1>Category</h1>
              <input
                type="radio"
                checked={cat === "art"}
                name="cat"
                value="art"
                id="art"
                onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor="art">ART</label>
              <input
                type="radio"
                checked={cat === "science"}
                name="cat"
                value="science"
                id="science"
                onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor="science">SCIENCE</label>
              <input
                type="radio"
                checked={cat === "technology"}
                name="cat"
                value="technology"
                id="technology"
                onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor="technology">TECHNOLOGY</label>
              <input
                type="radio"
                checked={cat === "cinema"}
                name="cat"
                value="cinema"
                id="cinema"
                onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor="cinema">CINEMA</label>
              <input
                type="radio"
                checked={cat === "design"}
                name="cat"
                value="design"
                id="design"
                onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor="design">DESIGN</label>
              <input
                type="radio"
                checked={cat === "food"}
                name="cat"
                value="food"
                id="food"
                onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor="food">FOOD</label>
            </div>
            <div className="item">
            <div className="button">
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

export default Write;
