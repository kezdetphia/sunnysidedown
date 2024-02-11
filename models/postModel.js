import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      min: 3,
      max: 255,
    },
    desc: {
      type: String,
      required: true,
      min: 3,
      max: 255,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    img: {
      type: String,
    },
    userId: {
      type: String,
      required: true,
    },
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);


export const Post = mongoose.models.Post || mongoose.model("Post", postSchema);