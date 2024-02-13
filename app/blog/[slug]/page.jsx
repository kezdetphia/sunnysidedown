
import { getPost } from "@/lib/data/postData";
import { getUser } from "@/lib/data/userData";
import Image from "next/image";
import React, { Suspense } from "react";

export default async function SingleBlogPage({ params }) {
  const { slug } = params;

  const post = await getPost(slug);
  console.log(post);

  const user = await getUser(post.userId);

  //TODO: have the title in the middle while the rest is on the left

  return (
    <div className="px-10 flex flex-col  md:flex-row  pt-10 space-x-5  ">
      <div className=" md:w-1/2  ">
        <Image
          alt="post image "
          src={post.img ? post.img : "/noimage.jpg"}
          width={800}
          height={600}
        />
      </div>

      <div className="w-full px-auto  md:w-1/2 flex flex-col pt-5 md:pt-0 ">
        <div className="text-center md:text-left ">
          <h1 className="text-3xl font-bold mb-4 flex  ">{post.title}</h1>
        </div>

        <div className="flex  flex-col gap-1 pb-3">
          <div className="flex gap-x-2 ">
            <p className="text-gray-500">Author:</p>
            {post && (
              <Suspense fallback={<div>Loading...</div>}>
                <p>{user.username}</p>
              </Suspense>
            )}
          </div>

          <div className="flex gap-x-2 ">
            <p className="text-gray-500  ">Published:</p>
            <p>{post.createdAt.toString().slice(4, 16)}</p>
          </div>
        </div>
        <p className="text-gray-600 mb-2 text-left ">{post.desc}</p>
      </div>
    </div>
  );
}
