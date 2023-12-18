import React, { useEffect, useState } from "react";
import { Link, useHref } from "react-router-dom";
import axios from "axios";

const HomeBlog = () => {
  const [posts, setPosts] = useState([]);

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api/postBlog/blog`);
        setPosts(res.data);
        //console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // const posts = [
  //   {
  //     id: 1,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     id: 2,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     id: 3,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     id: 4,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  // ];

  return (
    <>
      <div className="container">
        <div className="nav-scroller py-1 mb-3 border-bottom">
          <nav className="nav nav-underline justify-content-between">
            
            <Link to={`/blog/write`}>
              <button className="btn btn-success">Viết bài</button>
            </Link>
          </nav>
        </div>
        {posts?.map((post) => (
          <div
            className="posts row mb-2"
            style={{
              marginTop: "50px",
              gap: "50px",
            }}
          >
            <div
              className="card col-md-12"
              key={post.id}
              style={
                {
                  // width: "18rem",
                }
              }
            >
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="img col-md-4 p-4 d-flex d-column flex-column position-static" style={{}}>
                  <img
                    src={post.img}
                    // src="https://cafefcdn.com/zoom/600_315/203337114487263232/2022/3/3/photo1646280815645-1646280816151764748403.jpg"
                    className="card-img-top"
                    alt="..."
                    style={{ display: "inline-block", width: "100%", }}
                  />
                </div>
                <div className="card-body col-md-8 d-none d-lg-block" style={{}}>
                  <Link
                    to={`/blog/post/${post.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <h4 className="card-title mb-0">{post.title}</h4>
                  </Link>

                  <p className="card-text">{getText(post.desc)}</p>
                  <Link
                    to={`/blog/post/${post.Id}`}
                    // className="btn btn-primary"
                    className="icon-link gap-1 icon-link-hover stretched-link"
                    style={{fontSize: "20px"}}
                  >
                    Cotinue Reading
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
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

export default HomeBlog;
