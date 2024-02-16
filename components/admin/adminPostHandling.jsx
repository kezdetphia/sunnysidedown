import { deletePost, getPosts } from "@/lib/data/postData";
import Link from "next/link";
import DeleteButton from "../deleteButton";

export default async function AdminPostHandling() {
  const posts = await getPosts();

  return (
    <div>
      {posts.map(({ id, title, slug }) => (
        <div className="flex gap-x-2 items-center " key={id}>
          <Link href={`/blog/${slug}`}>
            <h2 className="text-xl">{title}</h2>
          </Link>
          <form action={deletePost}>
            <input type="hidden" name="id" value={id} />

            <DeleteButton props={title} />
            {/* <MdDelete className="h-6 w-6 text-red-500" /> */}
          </form>
        </div>
      ))}
    </div>
  );
}
