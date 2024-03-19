"use client";
import Image from "next/image";
import { updateLikes, updatePost } from "@/lib/data/postData";
import { useFormState } from "react-dom";
import { useState } from "react";

const LikeButton = ({ post }) => {
  const [state, formAction] = useFormState(updateLikes, undefined);
  const [liked, setLiked] = useState(false);

  return (
    <div>
      <form action={formAction}>
        <input type="number" name="likes" value={post.likes} readOnly hidden />
        <input name="id" value={post._id} readOnly hidden />
        <button onClick={() => setLiked(!liked)}>
          <Image
            src="/like.png"
            alt="like"
            width={50}
            height={50}
            className={`sm:mr-20 rounded-full transition duration-500 hover:scale-110 ${
              liked ? "bg-white" : ""
            }`}
          />
        </button>
      </form>
    </div>
  );
};

export default LikeButton;
