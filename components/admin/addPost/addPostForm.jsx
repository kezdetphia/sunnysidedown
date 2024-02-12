import { addPost } from "@/lib/data/postData";

export default function AddPostForm({ userId }) {
  return (
    <div>
      <form action={addPost} className="bg-white text-black">
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="desc" placeholder="Description" />
        <input type="text" name="slug" placeholder="Slug" />
        <input type="text" name="img" placeholder="image-link" />
        <input readOnly hidden type="text" name="userId" value={userId} />
        <button className="text-white bg-pink-300">Submit</button>
      </form>
    </div>
  );
}
