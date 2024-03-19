import { deletePost, getPosts, updatePost } from "@/lib/data/postData";
import Link from "next/link";
import { MdOutlineModeEdit } from "react-icons/md";
import DeleteButton from "../deleteButton";

export default async function AdminPostHandling() {
  const posts = await getPosts();

  return (
    <div className="md:pt-20 pb-10 flex  items-center xl:w-1/2    ">
      <div className=" bg-neutral-900 sm:w-4/5 w-screen mt-8 sm:mt-0 max-w-4xl mx-auto p-8 border-1 rounded-lg shadow-lg shadow-neutral-800 text-black">
        <h1 className="text-3xl  font-bold mb-8 text-neutral-300 text-start">
          Posts
        </h1>
        <div className="xl:h-[890px] h-[490px] overflow-y-auto space-y-4">
          {posts.map((post) => (
            <div
              className="flex justify-between items-center border border-1 border-neutral-400 rounded-xl shadow-md shadow-black  py-2 px-3 "
              key={post.id}
            >
              <Link href={`/blog/${post.slug}`}>
                <span className="text-neutral-400">{post.title}</span>
              </Link>
              <div className="flex space-x-1">
                <form action={updatePost}>
                  <input readOnly type="hidden" name="slug" value={post.slug} />
                  <Link href={`/admin/updatepost/${post.slug}`}>
                    {/* <Link href={`/admin/updatepost`}> */}
                    <MdOutlineModeEdit className="h-5 w-5 text-neutral-400" />
                  </Link>
                </form>

                <form action={deletePost}>
                  <input readOnly type="hidden" name="id" value={post.id} />
                  <DeleteButton props={post.title} />
                </form>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
