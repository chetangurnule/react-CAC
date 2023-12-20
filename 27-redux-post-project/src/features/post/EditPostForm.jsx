import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { postUpdated } from "./postSlice";
import { useNavigate } from "react-router-dom";

const EditPostForm = () => {
  const posts = useSelector((state) => state.posts);
  const { postId } = useParams();
  const currentPost = posts.find((post) => post.id === postId);
  const dispatch = useDispatch();
  //   when clicked on editPost button the user should redirect to the post/:postId page
  const navigate = useNavigate();

  const [title, setTitle] = useState(currentPost.title);
  const [content, setContent] = useState(currentPost.content);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const onEditPostClicked = () => {
    console.log(title, content);
    dispatch(postUpdated({ id: postId, title, content }));
    navigate(`../posts/${postId}`);
  };

  return (
    <section className="container">
      <h2 className="heading">Edit Post</h2>
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
        <button type="button" onClick={onEditPostClicked} className="button">
          Save Post
        </button>
      </form>
    </section>
  );
};

export default EditPostForm;
