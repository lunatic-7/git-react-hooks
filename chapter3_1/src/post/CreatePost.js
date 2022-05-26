import React, { useState } from "react";

const CreatePost = ({ user, posts, setPosts }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  const handleCreate = (e) => {
    const newPost = { title, content, author: user };
    setPosts([newPost, ...posts]);
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
