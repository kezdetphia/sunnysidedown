import Postcard from "../../components/postCard";
import { getPosts } from "@/lib/data/postData";

export default async function Blog() {
  const posts = await getPosts();

  return (
    <div className=" px-10  py-20 flex flex-col md:flex-row items-center flex-wrap gap-4 justify-center bg-neutral-950  ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-14">
        {posts.map((post) => (
          <ul>
            <li key={post.id}>
              <Postcard post={post} />
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
