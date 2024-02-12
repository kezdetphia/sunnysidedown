import Postcard from "@/components/postCard/Postcard";
import { getPosts } from "@/lib/data/postData";
import { getUser } from "@/lib/data/userData";

import React from "react";

export default async function Blog() {
  const posts = await getPosts();

  return (
    <div className="flex flex-wrap gap-4 justify-center pt-10 ">
      {posts.map((post) => (
        <div className="w-1/4" key={post._id}>
          <Postcard post={post} />
        </div>
      ))}
    </div>
  );
}
