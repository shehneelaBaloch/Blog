import { dummyPosts } from "../data"; // Import blog posts data
import PostCard from "../components/PostCard"; // Import PostCard component
import "../globals.css";

export default function BlogPage() {
  return (
    <div className="blog-container home-container">
      <h1> Blog Posts</h1>
      <div className="blog-post-grid">
        {dummyPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
