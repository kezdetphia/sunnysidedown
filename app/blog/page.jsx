import { getPosts } from "@/lib/data/postData";

import React from "react";

export default async function Blog() {
  const posts = await getPosts();

  return (
    <div>
      <div>
        {posts.map((post) => (
          <div key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.desc}</p>
          </div>
        ))}
      </div>
      Blog
    </div>
  );
}
