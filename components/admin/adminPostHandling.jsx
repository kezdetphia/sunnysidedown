import { deletePost, getPosts } from "@/lib/data/postData";
import Link from "next/link";
import DeleteButton from "../deleteButton";

export default async function AdminPostHandling() {
  const posts = await getPosts();

  return (
    <div className="md:pt-20 pb-10  items-center xl:w-1/2   ">
      <div className=" bg-gray-600 w-4/5 max-w-4xl mx-auto p-8 border-1 rounded-lg shadow-2xl shadow-gray-900 text-gray-900">
        <h1 className="text-3xl  font-bold mb-8 text-gray-300 text-center">
          Posts
        </h1>
        <div className="xl:h-[890px] h-[490px] overflow-y-auto space-y-4">
          {posts.map((post) => (
            <div
              className="flex justify-between items-center border border-1 border-gray-300 rounded-xl shadow-md shadow-black  py-2 px-3 "
              key={post.id}
            >
              <Link href={`/blog/${post.slug}`}>
                <span className="text-gray-400">{post.title}</span>
              </Link>
              <form action={deletePost}>
                <input readOnly type="hidden" name="id" value={post.id} />
                <DeleteButton props={post.title} />
              </form>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
