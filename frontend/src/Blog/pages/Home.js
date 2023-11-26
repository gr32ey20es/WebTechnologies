import React from "react";
import Footer from "../../homepage/Footer/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  const posts = [
    {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
    {
      userId: 1,
      id: 4,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    },
    {
      userId: 1,
      id: 5,
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
    },
    {
      userId: 1,
      id: 6,
      title: "dolorem eum magni eos aperiam quia",
      body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
    },
    {
      userId: 1,
      id: 7,
      title: "magnam facilis autem",
      body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
    },
  ];
  return (
    <>
      <div className="container">
        <h1>Content</h1>
        {posts.map((post) => (
          <div
            className="card"
            key={post.id}
            style={{ width: "18rem", display: "inline-block", margin: "4px" }}
          >
            <img
              src="https://cafefcdn.com/zoom/600_315/203337114487263232/2022/3/3/photo1646280815645-1646280816151764748403.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <Link to={`/blog/post/${post.id}`}>
                <h5 className="card-title">{post.title}</h5>
              </Link>

              <p className="card-text">{post.body}</p>
              <a href="#" className="btn btn-primary">
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Home;
