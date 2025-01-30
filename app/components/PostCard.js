import Link from "next/link";
import Image from "next/image";
import "../globals.css";

export default function PostCard({ post }) {
  return (
    <div className="post-card">
      <Image 
        src={post.image} 
        alt={post.title} 
        width={300} 
        height={200} 
        className="post-image"
      />
      <h2>{post.title}</h2>
      <p>{post.excerpt}</p>
      <Link href={`/posts/${post.id}`} className="read-more">
        Read more →
      </Link>
    </div>
  );
}
