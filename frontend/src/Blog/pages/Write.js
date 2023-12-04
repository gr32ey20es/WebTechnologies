import React, { useState } from "react";
// import ReactQuill from 'react-quill';
import axios from 'axios';
import { useLocation } from "react-router-dom";

const Write = () => {

  const state = useLocation().state;
  const [value, setValue] = useState(state?.value || "");
  const [title, setTitle] = useState(state?.title || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  const upload = async ()=> {
    try {
      const formData = new FormData();
      formData.append("file", file)
      const res = await axios.post("/upload", formData)
      return res.data
    } catch (error) {
      console.log(error);
    }
  }

  const handleClick = async e => {
    e.preventDefault()
    const imgUrl = upload()

    try {
      
    } catch (error) {
      console.log(error)
    }
  }

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
              <input
                style={{ width: "100%", height: "300px" }}
                type="text"
                placeholder="Content"
                value={value}
                onChange={setValue}
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
              <span>
                <b>Status: </b>Draft
              </span>
              <br></br>
              <span>
                <b> Visibility: </b>Public
              </span>
              <br></br>
              <div className="container">
                <input type="file" id="file" onChange={e=>setFile(e.target.files[0])} />
              </div>
              <div className="button">
                <button>Save as a draft</button>
                <button onClick={handleClick}>Public</button>
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
              <input type="radio" checked={cat === "art"} name="cat" value="art" id="art" onChange={e => setCat(e.target.value)} />
              <label htmlFor="art">ART</label>
              <input type="radio" checked={cat === "science"} name="cat" value="science" id="science" onChange={e => setCat(e.target.value)} />
              <label htmlFor="art">SCIENCE</label>
              <input type="radio" checked={cat === "technology"} name="cat" value="technology" id="technology" onChange={e => setCat(e.target.value)} />
              <label htmlFor="art">TECHNOLOGY</label>
              <input type="radio" checked={cat === "cinema"} name="cat" value="cinema" id="cinema" onChange={e => setCat(e.target.value)} />
              <label htmlFor="art">CINEMA</label>
              <input type="radio" checked={cat === "design"} name="cat" value="design" id="design" onChange={e => setCat(e.target.value)} />
              <label htmlFor="art">DESIGN</label>
              <input type="radio" checked={cat === "food"} name="cat" value="food" id="food" onChange={e => setCat(e.target.value)} />
              <label htmlFor="art">FOOD</label>
            </div>
            <div className="item"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Write;
