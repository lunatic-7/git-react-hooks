import React, { useState, useContext } from "react";
import { StateContext } from "../contexts";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const {state, dispatch} = useContext(StateContext);
  const {user} = state

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  const handleCreate = (e) => {
    dispatch({type: "CREATE_POST", title, content, author: user});
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
