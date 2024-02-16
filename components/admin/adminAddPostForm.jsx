"use client";
import { addPost } from "@/lib/data/postData";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";

//TODO: need to add linebreaks when hitting enter
// in description section to display it in the blogpage the same way

export default function AdminAddPostForm({ userId }) {
  const descRef = useRef();
  const router = useRouter();

  const [state, formAction] = useFormState(addPost, undefined);

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
  }, [state]);

  return (
    <div className="md:pt-20 pt-10 flex items-center">
      <form
        action={formAction}
        className="w-4/5 max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-xl text-gray-900"
      >
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Add Post</h1>

        <div className="mb-4">
          <label
            ref={descRef}
            name="desc"
            className="block text-sm font-medium text-gray-600"
          >
            Description
          </label>
          <textarea
            ref={descRef}
            name="desc"
            placeholder="One day baby..."
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500 resize-none whitespace-pre-wrap"
            rows="20" // Set the number of visible text lines here
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            name="title"
            className="block text-sm font-medium text-gray-600"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="The bird"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
          />
        </div>

        <div className="mb-4">
          <label
            name="slug"
            className="block text-sm font-medium text-gray-600"
          >
            Slug
          </label>
          <input
            type="text"
            name="slug"
            placeholder="A single word that describes the post"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
          />
        </div>
        <div className="mb-4">
          <label name="img" className="block text-sm font-medium text-gray-600">
            Image Link
          </label>
          <input
            type="text"
            name="img"
            placeholder="Link to the image"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
          />
        </div>

        <div className="mb-4">
          <label
            name="isDark"
            className="block text-sm font-medium text-gray-600"
          >
            Vibe of story
          </label>
          <select
            name="isDark"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
          >
            <option value="true">Dark</option>
            <option value="false">Bright</option>
          </select>
        </div>

        <input readOnly hidden type="text" name="userId" value={userId} />
        <button
          type="submit"
          className="w-full py-2 px-4 bg-gray-900 hover:bg-gray-800 focus:ring-gray-500 focus:ring-offset-gray-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
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
  );
}
