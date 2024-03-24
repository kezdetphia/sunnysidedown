import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";

export default async function Postcard({ post }) {
  return (
    <div>
      <div className="  transition duration-500 hover:scale-105 ">
        <Link className="cursos-pointer" href={`/blog/${post?.slug}`}>
          <div>
            <div className=" relative sm:w-80 w-full h-96 gap-x-3 ">
              <Image
                className="rounded-2xl "
                src={post?.img ? post.img : "/noimage.jpg"}
                alt="post-image"
                object-fit="cover"
                // width={900}
                // height={1000}
                fill={true}
              />
            </div>
          </div>

          <div className="text-center pt-2 space-y-2">
            <h2 className="text-2xl text-neutral-300 font-semibold">
              {post?.title}
            </h2>
            <p className="text-neutral-400 text-md">
              {post?.desc.substring(0, 30)}...
            </p>
            <p className="text-neutral-600 text-md ">
              {post.createdAt?.toString().slice(4, 16)}
            </p>
            <div className="flex justify-center relative">
              <p className="text-neutral-500">Read More</p>
              <div className="flex items-center">
                <p className="text-white absolute right-7">{post.likes}</p>
                <button className="absolute right-0">
                  <FaHeart size={18} color="red" />
                </button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
