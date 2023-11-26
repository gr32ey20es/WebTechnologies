import React, { useState } from "react";
// import ReactQuill from 'react-quill';

const Write = () => {
  const [value, setValue] = useState("");

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
                <input type="file" id="file" />
              </div>
              <div className="button">
                <button>Save as a draft</button>
                <button>Update</button>
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
              <input type="radio" name="cat" value="art" id="art" />
              <label htmlFor="art">ART</label>
              <input type="radio" name="cat" value="art" id="art" />
              <label htmlFor="art">SCIENCE</label>
              <input type="radio" name="cat" value="art" id="art" />
              <label htmlFor="art">TECHNOLOGY</label>
              <input type="radio" name="cat" value="art" id="art" />
              <label htmlFor="art">CINEMA</label>
              <input type="radio" name="cat" value="art" id="art" />
              <label htmlFor="art">DESIGN</label>
              <input type="radio" name="cat" value="art" id="art" />
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
