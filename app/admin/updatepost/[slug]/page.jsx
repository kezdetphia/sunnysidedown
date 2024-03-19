import AdminUpdatePostForm from "@/components/admin/adminUpdatePostForm";
import { getPost } from "@/lib/data/postData";
import React from "react";

const UpdatePost = async ({ params }) => {
  const { slug } = params;

  const post = await getPost(slug);


  return (
    <div>
      <AdminUpdatePostForm post={post} />
    </div>
  );
};

export default UpdatePost;
