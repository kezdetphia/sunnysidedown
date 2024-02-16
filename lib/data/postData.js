"use server";
import { Post } from "@/models/postModel";
import { connectToDb } from "../connectToDb";
import { revalidatePath } from "next/cache";

// connectToDb();

export const getPosts = async () => {
  connectToDb();
  try {
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log({ GEtpostsError: err });
  }
};

export const getPost = async (slug) => {
  connectToDb();
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
    // return { error: `Image link must start with "https://images.pexels"` };
    return { error: "wrong link" };
  }

  try {
    connectToDb();
    const post = new Post({
      title: title,
      desc: desc,
      slug: slug,
      userId: userId,
      img: img,
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
    connectToDb();
    await Post.findByIdAndDelete(id);
    revalidatePath("/blog");
    revalidatePath("/admin");
    console.log({ success: "Post deleted!" });
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};
