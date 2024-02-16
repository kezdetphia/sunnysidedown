import { deletePost, getPosts } from "@/lib/data/postData";
import Link from "next/link";
import DeleteButton from "../deleteButton";

export default async function AdminPostHandling() {
  const posts = await getPosts();

  return (
    <div className=" md:pt-20 pt-10  items-center">
      <div className="p-8">
        <h1 className="text-2xl font-bold pb-3">Posts</h1>
        {posts.map(({ id, title, slug }) => (
          <div className="flex gap-x-2  " key={id}>
            <Link href={`/blog/${slug}`}>
              <h2 className="">{title}</h2>
            </Link>
            <form action={deletePost}>
              <input type="hidden" name="id" value={id} />

              <DeleteButton props={title} />
              {/* <MdDelete className="h-6 w-6 text-red-500" /> */}
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}
