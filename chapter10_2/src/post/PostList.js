import React from "react";
import { usePostsState } from "../hooks";

import Post from "./Post";

const PostList = () => {

  const posts = usePostsState();

  return (
    <div>
      {posts.map((p, i) => (
        <React.Fragment key={"post-" + i}>
          <Post {...p} short={true}/>
          <hr />
        </React.Fragment>
      ))}
    </div>
  );
};

// NOTE: The key prop always has to be added to the uppermost parent element
// that is rendered within the map function. In this case, we had to move the
// key prop from the Post component to the React.Fragment component.

// This is <Post {...p} /> similar to this: <Post title={p.title} content={p.content} author={p.author} />

export default PostList;
