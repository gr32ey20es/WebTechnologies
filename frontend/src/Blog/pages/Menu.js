import axios from "axios";
import React, { useEffect, useState } from "react";

const Menu = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/blog`)
        setPosts(res.data);
      } catch (error) {
          console.log(error);
      }
    };
    fetchData();
  }, []);

  // const posts = [
  //   {
  //     userId: 1,
  //     id: 1,
  //     title:
  //       "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  //     body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  //   },
  //   {
  //     userId: 1,
  //     id: 2,
  //     title: "qui est esse",
  //     body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  //   },
  //   {
  //     userId: 1,
  //     id: 3,
  //     title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
  //     body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  //   },
  //   {
  //     userId: 1,
  //     id: 4,
  //     title: "eum et est occaecati",
  //     body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
  //   },
  //   {
  //     userId: 1,
  //     id: 5,
  //     title: "nesciunt quas odio",
  //     body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
  //   },
  //   {
  //     userId: 1,
  //     id: 6,
  //     title: "dolorem eum magni eos aperiam quia",
  //     body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
  //   },
  //   {
  //     userId: 1,
  //     id: 7,
  //     title: "magnam facilis autem",
  //     body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
  //   },
  // ];
  return (
    <>
      <div className="menu" style={{display:"flex",flexDirection:"column"}}>
        <h1>Other Post</h1>
        {posts.map((post) => (
          <div className="post" key={post.id} style={{display:"flex",flexDirection:"column"}}>
            <img src="https://images.squarespace-cdn.com/content/v1/6282ec55d5f3c229291fcb47/1674437725718-PQYL45LC1J5G7XX6ZAIM/image-asset.png" alt="hero"></img>
            <h4>{post.title}</h4>
            <button className="btn btn-primary">Read more</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Menu;
