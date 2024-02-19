import Postcard from "../../components/postCard";
import { getPosts } from "@/lib/data/postData";

export default async function Blog() {
  const posts = await getPosts();

  //TODO: When deployed posts lean towrard right on mobile
  // can make it screen wide on mobiles

  return (
    <div className=" px-10 py-20 flex flex-col md:flex-row items-center flex-wrap gap-4 justify-center bg-neutral-950  ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-14">
        {posts.map((post) => (
          //CHANGES: from _id to id
          <div key={post.id}>
            <Postcard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}
