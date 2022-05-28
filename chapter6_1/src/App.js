import React, { useReducer, useEffect, useState } from "react";

import CreatePost from "./post/CreatePost";
import PostList from "./post/PostList";
import UserBar from "./user/UserBar";
import appReducer from "./reducers";
import Header from "./Header";
import { ThemeContext, StateContext } from "./contexts";
import ChangeTheme from "./ChangeTheme";

function App() {
  // const defaultPosts = [
  //   {
  //     title: "React Hooks",
  //     content: "The greatest thing since sliced bread!",
  //     author: "Wasif Nadeem",
  //   },
  //   {
  //     title: "Using React Fragments",
  //     content: "Keeping the DOM tree clean!",
  //     author: "Wasif Nadeem",
  //   },
  // ];

  useEffect(() => {
    fetch("/api/posts")
      .then(result => result.json())
      .then(posts => dispatch({ type: 'FETCH_POSTS', posts }))
  }, [])

  const [theme, setTheme] = useState({
    primaryColor: "deepskyblue",
    secondaryColor: "coral"
  })

  const [state, dispatch] = useReducer(appReducer, { user: '', posts: [] })
  const { user } = state;

  useEffect(() => {

    if (user) {
      document.title = `${user} - React Hooks Blog`;
    }
    else {
      document.title = 'React Hooks Blog'
    }

  }, [user])

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <ThemeContext.Provider value={theme}>
        <div style={{ padding: 7 }}>
          <Header text="React Hooks Blog" />
          <ChangeTheme theme={theme} setTheme={setTheme} />
          <br />
          <UserBar />
          <br />
          {user && <CreatePost />}
          <br />
          <hr />
          <PostList />
        </div>
      </ThemeContext.Provider>
    </StateContext.Provider>
  );
}

export default App;