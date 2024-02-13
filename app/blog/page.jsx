import Postcard from "@/components/postCard/Postcard";
import { getPosts } from "@/lib/data/postData";

export default async function Blog() {
  const posts = await getPosts();



  return (
    <div className="px-10 py-4 flex flex-col md:flex-row items-center flex-wrap gap-4 justify-center pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
        {posts.map((post) => (
          <div key={post._id}>
            <Postcard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}
