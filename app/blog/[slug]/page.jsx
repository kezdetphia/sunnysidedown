import LikeButton from "@/components/admin/likeButton";
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
  const { title, desc, userId, img, isDark, likes, createdAt, id } = post;
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  return (
    <div
      className={`px-10  flex flex-col md:flex-row py-20  md:space-x-5 min-h-screen ${
        isDark ? "bg-neutral-950 " : "bg-neutral-100 "
      } `}
      style={{
        backgroundImage: `url(${
          isDark ? "/darkcloud.jpeg" : "/brightcloud2.jpeg"
        })`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        filter: "brightness(0.7)",
      }}
    >
      <div className=" md:w-1/2 flex justify-center ">
        <div className="relative  w-full   h-[500px]  md:h-[500px] md:w-[400px] lg:w-[700px] lg:h-[700px] xl:w-[700px] xl:h-[800px] gap-x-3   ">
          <Image
            className="rounded-2xl"
            alt="post image "
            // src={.img ? post.img : "/noimage.jpg"}
            src={img ? img : "/noimage.jpg"}
            object-fit="cover"
            fill={true}
          />
        </div>
      </div>
      <div className="w-full  px-auto  md:w-1/2 flex flex-col pt-5 md:pt-0 ">
        <div className="text-center md:text-left flex items-center justify-between  ">
          <h1
            className={`text-3xl font-bold mb-4 flex  ${
              isDark ? "text-neutral-100 " : "text-neutral-900"
            } `}
          >
            {title}
          </h1>
          <div>
            <LikeButton likes={likes} id={id} />
            {/* <button className="sm:mr-20 border-blue-800   bg-blue-600 px-3 py-1 rounded-xl text-neutral-100 font-bold "></button> */}
          </div>
        </div>
        <div className="flex flex-col gap-1 pb-3">
          <div className="flex gap-x-2 ">
            <p
              className={` ${
                isDark ? "text-neutral-100" : "text-neutral-800"
              }  pr-4`}
            >
              Author:
            </p>
            {post && (
              <Suspense fallback={<div>Loading...</div>}>
                <PostUser isDark={isDark} userId={userId} />
              </Suspense>
            )}
          </div>
          <div className="flex gap-x-2 ">
            <p
              className={` ${
                isDark ? "text-neutral-100" : "text-neutral-800"
              }  `}
            >
              Published:
            </p>
            <p className={isDark ? "text-neutral-200" : "text-neutral-700"}>
              {createdAt.toString().slice(4, 16)}
            </p>
          </div>
        </div>
        <p
          className={` text-lg mb-2 text-left tracking-wide ${
            isDark ? "text-neutral-100" : "text-neutral-800"
          }  `}
        >
          {/* {.desc} */}
          {desc?.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {" "}
              {line} <br />{" "}
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
}
