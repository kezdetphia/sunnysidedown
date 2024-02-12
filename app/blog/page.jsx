import Postcard from "@/components/postCard/Postcard";
import { getPosts } from "@/lib/data/postData";

export default async function Blog() {
  const posts = await getPosts();

  //TODO: have 4 posts in a row on largse screens and oiut 1 on smaller screens

  return (
    <div className=" px-10 flex flex-col md:flex-row items-center flex-wrap flex-4 gap-4 justify-center pt-10  ">
      {posts.map((post) => (
        <div
          className="w-full md:w-1/2 flex flex-1 items-center justify-around"
          key={post._id}
        >
          <Postcard post={post} />
        </div>
      ))}
    </div>
  );
}
