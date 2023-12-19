import { useParams } from "react-router-dom";

const blogPosts = [
  { id: 1, title: "Introduction to React", content: "Lorem ipsum..." },
  { id: 2, title: "State Management in Redux", content: "Dolor sit amet..." },
  { id: 3, title: "Routing in React", content: "Lorem, ipsum dolor...." },
  { id: 4, title: "Dynamic segment in React", content: "amet  elit..." },
];

function BlogPost() {
  const { postId } = useParams();
  const post = blogPosts.find((post) => post.id === Number(postId));
  console.log(post);

  return (
    <div>
      {post ? (
        <>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </>
      ) : (
        <p>Blog post not found</p>
      )}
    </div>
  );
}

export default BlogPost;
