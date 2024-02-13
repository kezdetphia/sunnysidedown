import Link from "next/link";
import React from "react";

export default function AdminPostHandling({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <ul>
            <Link href={`/blog/${post.slug}`}>
              <li>{post.title}</li>
            </Link>
          </ul>
        </div>
      ))}
    </div>
  );
}
