import { Link } from "react-router-dom";

const blogPosts = [
  { id: 1, title: "Introduction to React", content: "Lorem ipsum..." },
  { id: 2, title: "State Management in Redux", content: "Dolor sit amet..." },
  { id: 3, title: "Routing in React", content: "Lorem, ipsum dolor...." },
  { id: 4, title: "Dynamic segment in React", content: "amet  elit..." },
];

function BlogList() {
  return (
    <>
      <div>
        <h2>Blog Posts</h2>
        <ul>
          {blogPosts.map((post) => {
            return (
              <li key={post.id}>
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default BlogList;
