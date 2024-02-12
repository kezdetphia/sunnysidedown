import Image from "next/image";
import Link from "next/link";

export default async function Postcard({ post }) {
  return (
    <div className=" ">
      <div className=" ">
        <Link className="cursos-pointer" href={`/blog/${post.slug}`}>
          <div>
            <div className="rounded-xl">
              <Image
                src={post.img ? post.img : "/noimage.jpg"}
                alt="post-image"
                width={500}
                height={700}
                objectFit="cover"
              />
            </div>
          </div>

          <div className="text-center pt-2 space-y-1">
            <h2 className="text-xl text-gray-100 font-semibold">
              {post.title}
            </h2>
            <p className="">{post.desc.substring(0, 30)}...</p>
            <p className="text-gray-400 ">
              {post.createdAt?.toString().slice(4, 20)}
            </p>
            <button className=" text-gray-300">Read More</button>
          </div>
        </Link>
      </div>
    </div>
  );
}
