import React from "react";

const Card = () => {
  return (
    <>
      <div className="card" style={{ width: "18rem", display:"inline-block", margin: "4px" }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmgHb15Fyd9FnzXW5N6Fbdk3LIqOZ0pS8xAcZ4s2l4dQ&s"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            TEST 1
          </p>
          <a href="#" className="btn btn-primary">
            View Result
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
