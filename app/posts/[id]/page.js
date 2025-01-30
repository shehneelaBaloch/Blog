"use client"; // Required for `useParams`
import { useParams } from "next/navigation";
import Image from "next/image";
import { dummyPosts } from "../../data"; // Importing the same data file
import "../../globals.css";

export default function PostPage() {
  const params = useParams();
  const post = dummyPosts.find((p) => p.id === params.id); // Finding post by ID

  if (!post) {
    return <h1>Post Not Found</h1>;
  }

  return (
    <div className="post-container">
      <h1>{post.title}</h1>

      <div className="post-image-wrapper">
        <Image
          src={post.image}
          alt="Blog Post Image"
          width={800} 
          height={450} 
          className="blog-post-image"
        />
      </div>

      <p className="post-content">{post.content}</p>
    </div>
  );
}
