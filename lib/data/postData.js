"use server";
import { Post } from "@/models/postModel";
import { connectToDb } from "../connectToDb";
import { revalidatePath } from "next/cache";
import { unstable_noStore as noStore } from "next/cache";

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
// export const addPost = async (prevState, formData) => {
//   const { title, desc, slug, userId, img, isDark, likes } =
//     Object.fromEntries(formData);
//   if (!img.startsWith("https://")) {
//     return { error: "wrong link" };
//   }
//   try {
//     await connectToDb();
//     const post = new Post({
//       title,
//       desc,
//       slug,
//       userId,
//       img,
//       isDark,
//       likes,
//     });
//     await post.save();
//     revalidatePath("/blog");
//   } catch (err) {
//     console.log({ AddpostErrorinPostdataJS: err });
//   }
// };

export const addPost = async (prevState, formData) => {
  const { title, desc, slug, userId, isDark, likes, img } =
    Object.fromEntries(formData);
 
  if (
    !img ||
    (!img.includes("png") &&
      !img.includes("jpg") &&
      !img.includes("jpeg") &&
      !img.includes("bmp") &&
      !img.includes("svg") &&
      !img.includes("pexels") &&
      !img.includes("webp"))
  ) {
    return { error: "Please upload a valid image file." };
  }

  const loadingMessage = {message: "Submitting..."}

  try {
    await connectToDb();
    const post = new Post({
      title,
      desc,
      slug,
      userId,
      img,
      isDark,
      likes,
    });
    await post.save();
    revalidatePath("/blog");
    return post;
  } catch (err) {
    console.error("Error adding post:", err);
    return { error: "An error occurred while adding the post." };
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

export const updatePost = async (prevState, formData) => {
  const { id, title, desc, slug, img, isDark, likes } =
    Object.fromEntries(formData);
  if (
    !img ||
    (!img.includes("png") &&
      !img.includes("jpg") &&
      !img.includes("jpeg") &&
      !img.includes("bmp") &&
      !img.includes("svg") &&
      !img.includes("pexels") &&
      !img.includes("webp"))
  ) {
    return { error: "Please upload a valid image file." };
  }
  try {
    await connectToDb();
    await Post.findByIdAndUpdate(id, {
      title,
      desc,
      slug,
      img,
      isDark,
      likes,
    });
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};
export const updateLikes = async (prevState, formData) => {
  const { id, likes } = Object.fromEntries(formData);
  noStore();
  try {
    await connectToDb();
    const post = await Post.findById(id);
    if (post) {
      post.likes += 1;
      await post.save();
      revalidatePath("blog");
    }
  } catch (error) {
    console.log(error);
  }
};
