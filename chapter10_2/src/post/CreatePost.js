import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useInput } from "react-hookedup";
import useUndo from "use-undo";
import { useUserState, useDispatch, useAPICreatePost } from "../hooks";

const CreatePost = () => {
  const { value: title, bindToInput: bindTitle } = useInput('');
  const [undoContent, {
    set: setContent,
    undo,
    redo,
    canUndo,
    canRedo
  }] = useUndo('');

  const content = undoContent.present;

  const dispatch = useDispatch();
  const user = useUserState();
  const [post, createPost] = useAPICreatePost();
  const navigate = useNavigate();

  useEffect(() => {
    if (post && post.data) {
      dispatch({ type: 'CREATE_POST', ...post.data })
      navigate(`/view/${post.data.id}`)
    }
    // eslint-disable-next-line
  }, [post, dispatch])

  const handleCreate = (e) => {
    createPost({ title, content, author: user })
  };

  const handleContent = (e) => {
    setContent(e.target.value)
  }

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
          {...bindTitle}
          name="create-title"
          value={title}
          id="create-title"
        />
      </div>

      <textarea onChange={handleContent} value={content} />
      <input type="submit" value="Create" />

      <button type="button" onClick={undo}
        disabled={!canUndo}>Undo</button>
      <button type="button" onClick={redo}
        disabled={!canRedo}>Redo</button>
      {/* It is important that <button> elements in a <form> element have a type
      attribute defined. If the type attribute is not defined, buttons are assumed
      to be type="submit", which means that they will trigger the onSubmit
      handler function when clicked. */}
    </form>
  );
};

export default CreatePost;
