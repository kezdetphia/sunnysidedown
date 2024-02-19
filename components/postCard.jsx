import Image from "next/image";
import Link from "next/link";


export default async function Postcard({ post }) {
  return (
    <div>
      <div className=" ">
        <Link className="cursos-pointer" href={`/blog/${post?.slug}`}>
          <div>
            <div className="rounded-xl relative w-80 h-96 gap-x-3 ">
              <Image
                src={post?.img ? post.img : "/noimage.jpg"}
                alt="post-image"
                object-fit="cover"
                // width={500}
                // height={700}
                fill={true}
              />
            </div>
          </div>

          <div className="text-center pt-2 space-y-1">
            <h2 className="text-xl text-gray-800 font-semibold">
              {post?.title}
            </h2>
            <p className="text-gray-800">{post?.desc.substring(0, 30)}...</p>
            <p className="text-gray-400 ">
              {post.createdAt?.toString().slice(4, 16)}
            </p>
            <button className=" text-gray-800">Read More</button>
          </div>
        </Link>
      </div>
    </div>
  );
}
