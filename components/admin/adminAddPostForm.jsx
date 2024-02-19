"use client";
import { addPost } from "@/lib/data/postData";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";

//TODO: need to add linebreaks when hitting enter
// in description section to display it in the blogpage the same way

export default function AdminAddPostForm() {
  const descRef = useRef();
  const router = useRouter();
  const session = useSession();

  const [state, formAction] = useFormState(addPost, undefined);
  const [userId, setUserId] = useState(""); //set userid after checking if user is authenticated

  useEffect(() => {
    if (session?.data?.user) {
      setUserId(session?.data?.user.id);
    }
  }, [session]);

  useEffect(() => {
    if (!session?.data?.user.isAdmin) {
      router.push("/");
    }
    if (state && !state.error) {
      router.push("/blog");
    }
  }, [state, session, router]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        const textarea = descRef.current;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const value = textarea.value;
        textarea.value =
          value.substring(0, start) + "\n" + value.substring(end);
        textarea.selectionStart = textarea.selectionEnd = start + 1;
        event.preventDefault();
      }
    };

    const descRerefence = descRef.current;

    if (descRerefence) {
      descRerefence.addEventListener("keypress", handleKeyPress);
    }

    return () => {
      if (descRerefence) {
        descRerefence.removeEventListener("keypress", handleKeyPress);
      }
    };
  }, []);

  useEffect(() => {
    if (state && !state.error) {
      router.push("/blog");
    }
  }, [state, router]);

  return (
    <div className="md:pt-20 py-10 flex items-center ">
      <div className=" bg-gray-600 w-4/5 max-w-4xl mx-auto p-8 border-1 rounded-xl shadow-md shadow-black  text-gray-900">
        <form action={formAction}>
          <h1 className="text-3xl font-bold mb-4 text-gray-300">Add Post</h1>

          <div className="mb-4">
            <label
              ref={descRef}
              name="desc"
              className="block text-sm font-medium text-gray-400"
            >
              Description
            </label>
            <textarea
              ref={descRef}
              name="desc"
              placeholder="One day baby..."
              className="bg-gray-500 mt-1 block w-full border border-gray-300 rounded-xl shadow-md shadow-black  py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500 resize-none whitespace-pre-wrap"
              rows="20" // Set the number of visible text lines here
            ></textarea>
          </div>

          <div className="mb-4">
            <label
              name="title"
              className="block text-sm font-medium text-gray-400"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="The bird"
              className="bg-gray-500 mt-1 block w-full border border-gray-300 rounded-xl shadow-md shadow-black  py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
            />
          </div>

          <div className="mb-4">
            <label
              name="slug"
              className="block text-sm font-medium text-gray-400"
            >
              Slug
            </label>
            <input
              type="text"
              name="slug"
              placeholder="A single word that describes the post"
              className="bg-gray-500 mt-1 block w-full border border-gray-300 rounded-xl shadow-md shadow-black  py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
            />
          </div>
          <div className="mb-4">
            <label
              name="img"
              className="block text-sm font-medium text-gray-400"
            >
              Image Link
            </label>
            <input
              type="text"
              name="img"
              placeholder="Link to the image"
              className="bg-gray-500 mt-1 block w-full border border-gray-300 rounded-xl shadow-md shadow-black  py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
            />
          </div>

          <div className="mb-4">
            <label
              name="isDark"
              className="block text-sm font-medium text-gray-400"
            >
              Vibe of story
            </label>
            <select
              name="isDark"
              className="bg-gray-500 mt-1 block w-full border border-gray-300 rounded-xl shadow-md shadow-black  py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
            >
              <option value="true">Dark</option>
              <option value="false">Bright</option>
            </select>
          </div>

          <input readOnly hidden type="text" name="userId" value={userId} />
          <button
            type="submit"
            className="w-full py-2 px-4 bg-gray-900 hover:bg-gray-800 focus:ring-gray-500 focus:ring-offset-gray-200 text-gray-300 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
          >
            Submit
          </button>
          <div className="flex  justify-center">
            {state && state.error === "wrong link" && (
              <p className="text-red-600">
                Wrong link, use{" "}
                <Link
                  href="https://www.pexels.com/"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  pexels.com,Then right click on image then copy image address.
                </Link>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
