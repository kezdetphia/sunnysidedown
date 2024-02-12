"use server";
import { Post } from "@/models/postModel";
import { connectToDb } from "../connectToDb";

connectToDb();

export const getPosts = async () => {
  // connectToDb();
  try {
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
  }
};

export const getPost = async (slug) => {
  // connectToDb();
  try {
    const post = await Post.findOne({ slug: slug });
    return post;
  } catch (err) {
    console.log(err);
  }
};

export const addPost = async (formData) => {
  const { title, desc, slug, userId, img } = Object.fromEntries(formData);

  try {
    // connectToDb();
    const post = new Post({
      title: title,
      desc: desc,
      slug: slug,
      userId: userId,
      img: img,
    });
    await post.save();
    return post;
  } catch (err) {
    console.log({ AddpostErrorinPostdataJS: err });
  }
};
