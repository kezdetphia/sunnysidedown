import PostUser from "@/components/postUser";
import { auth } from "@/lib/auth";
import { getPost } from "@/lib/data/postData";
import Image from "next/image";
import { redirect } from "next/navigation";
import React, { Suspense } from "react";

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  return {
    title: post?.title,
    description: post?.desc,
  };
};

export default async function SingleBlogPage({ params }) {
  const { slug } = params;
  const post = await getPost(slug);
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  return (
    <div className="px-10 flex flex-col md:flex-row pt-20  space-x-5 h-screen   ">
      <div className=" md:w-1/2 flex justify-center    ">
        <div className="rounded-xl relative md:w-4/5 w-full h-[500px]  lg:h-[800px] gap-x-3 pb-10  ">
          <Image
            alt="post image "
            src={post?.img ? post.img : "/noimage.jpg"}
            object-fit="cover"
            // width={500}
            // height={700}
            fill={true}
          />
        </div>
      </div>

      <div className="w-full  px-auto  md:w-1/2 flex flex-col pt-5 md:pt-0 ">
        <div className="text-center md:text-left ">
          <h1 className="text-3xl font-bold mb-4 flex  ">{post?.title}</h1>
        </div>

        <div className="flex flex-col gap-1 pb-3">
          <div className="flex gap-x-2 ">
            <p className="text-gray-500 pr-4">Author:</p>
            {post && (
              <Suspense fallback={<div>Loading...</div>}>
                <PostUser userId={post.userId} />
              </Suspense>
            )}
          </div>

          <div className="flex gap-x-2 ">
            <p className="text-gray-500  ">Published:</p>
            <p>{post?.createdAt.toString().slice(4, 16)}</p>
          </div>
        </div>

        <p className="text-gray-600 mb-2 text-left ">{post?.desc}</p>
      </div>
    </div>
  );
}
