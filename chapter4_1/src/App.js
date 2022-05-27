import React, { useReducer, useEffect } from "react";

import CreatePost from "./post/CreatePost";
import PostList from "./post/PostList";
import UserBar from "./user/UserBar";
import appReducer from "./reducers";

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

  const [state, dispatch] = useReducer(appReducer, { user: '', posts: defaultPosts })
  const { user, posts } = state;

  useEffect(() => {

    if (user) {
      document.title = `${user} - React Hooks Blog`;
    }
    else {
      document.title = 'React Hooks Blog'
    }

  }, [user])

  return (
    <div style={{ padding: 7 }}>
      <UserBar user={user} dispatch={dispatch} />
      <br />
      {user && <CreatePost user={user} posts={posts} dispatch={dispatch} />}
      <br />
      <hr />
      <PostList posts={posts} />
    </div>
  );
}

export default App;