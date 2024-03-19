"use client";
import Image from "next/image";
import { updateLikes, updatePost } from "@/lib/data/postData";
import { useFormState } from "react-dom";

const LikeButton = ({ post }) => {
  const [state, formAction] = useFormState(updateLikes, undefined);

  return (
    <div>
      <form action={formAction}>
        <input type="text" name="likes" readOnly hidden />
        <input name="id" value={post.id} readOnly hidden />
        <button>
          <Image
            src="/like.png"
            alt="like"
            width={50}
            height={50}
            className="sm:mr-20"
          />
        </button>
      </form>
    </div>
  );
};

export default LikeButton;
