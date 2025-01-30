import Image from "next/image";
import Link from "next/link";
import { dummyPosts } from "./data"; // Import blog posts data
import PostCard from "./components/PostCard"; // Import PostCard component
import "./globals.css";

export default function Home() {
  return (
    <div className="home-container">
      <h1>My Blog</h1>
      <p>Sharing knowledge one post at a time</p>

      <div className="intro-section">
        <div className="intro-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Proin nec ex vel libero pharetra auctor. Nam ut eros nec
            erat posuere tincidunt.
          </p>
        </div>
        <div className="intro-image">
          <Image 
            src="/images/AI_in_2025.jpg" 
            alt="AI in 2025" 
            width={400} 
            height={250} 
            priority 
          />
        </div>
      </div>

      <h2>Latest Blog Posts</h2>
      <div className="post-grid">
        {dummyPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

     
    </div>
  );
}
