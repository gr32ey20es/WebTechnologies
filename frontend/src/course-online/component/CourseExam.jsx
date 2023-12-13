import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, use  } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CourseExamContent = () => {


    return (
        <div className="container mt-4">
          <div className="row mt-4">
            <div className="col-12">
              <h2 className="text-align-start">Thư viện đề thi</h2>
            </div>
          </div>
          <div className="content-wrapper">
            <div className="row ">
                  <div className="col-sm-3">
                    <div
                      className="card"
                      style={{ width: "18rem", height: "20rem" }}
                    >
                      <img
                        src=""
                        className="card-img-top"
                        alt=""
                      ></img>
                      <div className="card-body">
                        <h5 className="card-title"></h5>
                        <p className="card-text"></p>
                        <button
                          className="btn btn-primary"
                        >
                          Exam
                    </button>
                      </div>
                    </div>
                  </div>
            </div>
          </div>
        </div>
      );
};
export default CourseExamContent;