import Image from "next/image";
import Link from "next/link";

export default async function Postcard({ post }) {
  return (
    <div>
      <div className="">
        <div>
          {post.img && (
            <div className="rounded-xl  overflow-hidden">
              <Image src={post.img} alt="post-image" width={500} height={700} />
            </div>
          )}
        </div>

        <div className="text-center pt-2 space-y-1">
          <h2 className="text-xl text-gray-900 font-semibold">{post.title}</h2>
          <p>{post.desc.substring(0, 30)}...</p>
          <p className="text-gray-400">
            {post.createdAt?.toString().slice(4, 16)}
          </p>
          <button className=" bg-pink-300 rounded-xl py-2 px-3 text-gray-800">
            <Link className="" href={`/blog/${post.slug}`}>
              Read More
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
