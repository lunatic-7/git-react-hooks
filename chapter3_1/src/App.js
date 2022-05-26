import React, { useState } from "react";

import CreatePost from "./post/CreatePost";
import PostList from "./post/PostList";
import UserBar from "./user/UserBar";

function App() {
  const defaultPosts = [
    {
      title: "React Hooks",
      content: "The greatest thing since sliced bread!",
      author: "Wasif Nadeem",
    },
    {
      title: "Using React Fragments",
      content: "Keeping the DOM tree clean!",
      author: "Wasif Nadeem",
    },
  ];

  const [user, setUser] = useState("");
  const [posts, setPosts] = useState(defaultPosts);

  return (
    <div style={{ padding: 7 }}>
      <UserBar user={user} setUser={setUser} />
      <br />
      {user && <CreatePost user={user} posts={posts} setPosts={setPosts} />}
      <br />
      <hr />
      <PostList posts={posts} />
    </div>
  );
}

export default App;