"use server";
import { Post } from "@/models/postModel";
import { connectToDb } from "../connectToDb";
import { revalidatePath } from "next/cache";

export const getPosts = async () => {
  try {
    await connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log({ getPostsError: err });
  }
};
export const getPost = async (slug) => {
  //TODO: look into nostore cache
  await connectToDb();
  try {
    const post = await Post.findOne({ slug: slug });
    return post;
  } catch (err) {
    console.log(err);
  }
};
export const addPost = async (prevState, formData) => {
  const { title, desc, slug, userId, img } = Object.fromEntries(formData);
  if (!img.startsWith("https://")) {
    return { error: "wrong link" };
  }
  try {
    await connectToDb();
    // const formattedDesc = desc.replace(/\n/g, "<br>");
    const post = new Post({
      title,
      desc,
      slug,
      userId,
      img,
    });
    await post.save();
    revalidatePath("/blog");
    return post;
  } catch (err) {
    console.log({ AddpostErrorinPostdataJS: err });
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    await connectToDb();
    await Post.findByIdAndDelete(id);
    revalidatePath("/blog");
    revalidatePath("/admin");
    console.log({ success: "Post deleted!" });
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};
