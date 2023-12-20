// AddPostForm.js
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { postAdded } from "./postSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const onSavePostClicked = () => {
    if (content && title) {
      const newPost = {
        id: nanoid(),
        title,
        content,
      };
      dispatch(postAdded(newPost));
      setTitle("");
      setContent("");
    }
  };

  return (
    <section className="container">
      <h2 className="heading">Add a New Post</h2>
      <form className="form">
        <label htmlFor="postTitle" className="label">
          Post Title:
        </label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
          className="input"
        />
        <label htmlFor="postContent" className="label">
          Content:
        </label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
          className="textarea"
        />
        <button type="button" onClick={onSavePostClicked} className="button">
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
