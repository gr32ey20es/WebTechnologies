import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

const Single = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-9">
            <img
              src="https://thuelens.com/wp-content/uploads/2020/08/iStock-517188688.jpg"
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
                  John Smith
                </span>
                <p style={{}} className="mb-1">
                  Posted 2 days ago
                </p>
              </div>
              <Link to={`/blog/write?edit=2`}>
                <img
                  style={{ width: 50 }}
                  src="https://cdn-icons-png.flaticon.com/512/6324/6324826.png"
                  alt="edit"
                ></img>
              </Link>
              <Link>
                <img
                  style={{ width: 50 }}
                  src="https://cdn-icons-png.flaticon.com/512/3687/3687412.png"
                  alt="delete"
                ></img>
              </Link>
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
          orem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum,
          tortor quis blandit mattis, ipsum orci condimentum est, ut mattis
          turpis urna ac felis. .
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum,
          tortor quis blandit mattis, ipsum orci condimentum est, ut mattis
          turpis urna ac felis. Duis justo sapien, aliquam tincidunt urna non,
          molestie sagittis mi. Nam eu diam nulla. Nam vel erat in leo elementum
          vehicula. Donec quam risus, consectetur eget turpis vitae, congue
          scelerisque neque. Donec et nibh ut metus laoreet tempus. Vivamus
          accumsan elementum arcu sit amet euismod. Interdum et malesuada fames
          ac ante ipsum primis in faucibus. In justo massa, rutrum et dignissim
          eget, pharetra vel orci. Maecenas molestie malesuada dignissim.
          Curabitur magna ex, fermentum in maximus eget, tempor eu dui.
          Pellentesque arcu nunc, viverra ac scelerisque et, laoreet ac sapien.
          Pellentesque eleifend, nulla a lacinia egestas, tortor tellus aliquet
          lorem, in auctor sem turpis nec orci. Nullam nec varius eros. Cras
          pretium augue sit amet libero egestas accumsan. Maecenas convallis
          lectus ut iaculis vulputate. Praesent commodo arcu at justo
          scelerisque aliquet. Sed a faucibus nunc. Vestibulum mollis ipsum ac
          tortor scelerisque, vestibulum ornare mi posuere. Integer consequat
          rhoncus ante lacinia tempus. Vivamus consectetur pretium arcu vitae
          efficitur. Quisque sodales ultrices erat, a blandit dolor. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Phasellus fermentum
          eu turpis a feugiat. Curabitur venenatis, mauris vitae vehicula
          mattis, metus lacus ullamcorper neque, vitae tempor massa massa in
          orci. Vestibulum ullamcorper, nulla eget aliquam mollis, odio tortor
          mollis massa, suscipit rhoncus libero est quis leo. Proin vehicula
          fermentum ex, non rhoncus ipsum iaculis ac. Cras porttitor justo sit
          amet velit gravida, ac condimentum urna placerat. Nulla eros nisi,
          varius eget ultricies eget, commodo ac leo. Praesent dictum
          scelerisque dui at consequat. Sed eu aliquet dui, et mollis ex. Nam
          eget sem vel justo maximus cursus. Mauris velit diam, fermentum vel
          nunc at, euismod efficitur nunc. Vivamus maximus molestie auctor.
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec
          gravida magna purus, id vulputate ligula tincidunt nec. Morbi iaculis
          leo a elit tincidunt euismod. Cras ut lacinia tortor. Proin dictum
          augue non metus euismod facilisis. Morbi sit amet feugiat est. Donec
          egestas odio risus, quis aliquam diam porttitor sed. Aenean ut
          porttitor orci. Sed e
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
