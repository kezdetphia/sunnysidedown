import React from "react";

export default function SingleBlogPage({ params }) {
  const { slug } = params;
  return <div>SingleBlogPage: {slug}</div>;
}
