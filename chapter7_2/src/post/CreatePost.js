import React, { useState, useContext, useEffect } from "react";
import { StateContext } from "../contexts";
import { useResource } from "react-request-hook";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { state, dispatch } = useContext(StateContext);
  const { user } = state
  const navigate = useNavigate();

  const [post, createPost] = useResource(({ title, content, author }) => ({
    // Here, we are using a shorthand syntax for array destructuring: we are
    // ignoring the first element of the array, by not specifying a value name.
    // Instead of writing const [ post, createPost ], and then not using
    // post, we just put a comma, as follows: const [ , createPost ].
    url: '/posts',
    method: 'post',
    data: { title, content, author }
  }))

  useEffect(() => {
    if (post && post.data) {
      dispatch({ type: 'CREATE_POST', ...post.data })
      navigate(`/view/${post.data.id}`)
    }
    // eslint-disable-next-line
  }, [post, dispatch])

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  const handleCreate = (e) => {
    createPost({ title, content, author: user })
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate();
      }}
    >
      <div>
        Author: <b>{user}</b>
      </div>

      <div>
        <label htmlFor="create-title">Title:</label>
        <input
          type="text"
          onChange={handleTitle}
          name="create-title"
          value={title}
          id="create-title"
        />
      </div>

      <textarea onChange={handleContent} value={content} />
      <input type="submit" value="Create" />
    </form>
  );
};

export default CreatePost;
