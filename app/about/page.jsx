import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function About() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-300">
      <h1 className="text-6xl pb-5">About me page</h1>
      <span className="text-3xl">
        Can upload an image and a little introduction
      </span>
    </div>
  );
}
