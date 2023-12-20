import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const SinglePostPage = () => {
  const { postId } = useParams();
  const posts = useSelector((state) => state.posts);
  const selectedPost = posts.find((post) => post.id === postId);
  if (!selectedPost) {
    return (
      <section className="post post-excerpt">
        <h2>Post not found!</h2>
      </section>
    );
  }
  return (
    <section>
      <article className="post post-excerpt">
        <h2>{selectedPost.title}</h2>
        <p className="post-content">{selectedPost.content}</p>
        <Link to={`/editPost/${postId}`} className="button">
          Edit Post
        </Link>
      </article>
    </section>
  );
};

export default SinglePostPage;
