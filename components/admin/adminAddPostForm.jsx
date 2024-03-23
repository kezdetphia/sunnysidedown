"use client";
import { addPost } from "@/lib/data/postData";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";

export default function AdminAddPostForm() {
  const descRef = useRef();
  const router = useRouter();
  const session = useSession();
  const [state, formAction] = useFormState(addPost, undefined);
  const [userId, setUserId] = useState(""); //set userid after checking if user is authenticated
  const [isDarkState, setIsDarkState] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

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
    if (state && !state.error) {
      router.push("/blog");
    }
  }, [state, router]);

  const [base64Image, setBase64Image] = useState();
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.onloadend = () => {
      setBase64Image(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="md:pt-20 py-10 flex items-center  ">
      <div className=" bg-neutral-900 sm:w-4/5 max-w-4xl mx-auto p-8 border-1 rounded-xl shadow-lg shadow-neutral-800 w-screen ">
        <form action={formAction}>
          <h1 className="text-3xl font-bold mb-4 text-neutral-300">Add Post</h1>

          <div className="mb-4">
            <label
              ref={descRef}
              name="desc"
              className="block text-sm font-medium text-neutral-500"
            >
              Description
            </label>
            <textarea
              ref={descRef}
              name="desc"
              placeholder="One day baby..."
              className="bg-neutral-800 text-neutral-200 mt-1 block w-full border border-neutral-400 rounded-xl shadow-md shadow-black  py-2 px-3 focus:outline-none focus:ring-neutral-500 focus:border-neutral-500 resize-none whitespace-pre-wrap"
              rows="20" // Set the number of visible text lines here
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              name="title"
              className="block text-sm font-medium text-neutral-500"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="The bird"
              className="bg-neutral-800 text-neutral-200 mt-1 block w-full border border-neutral-400 rounded-xl shadow-md shadow-black  py-2 px-3 focus:outline-none focus:ring-neutral-500 focus:border-neutral-500"
            />
          </div>

          <div className="mb-4">
            <label
              name="slug"
              className="block text-sm font-medium text-neutral-500"
            >
              Slug
            </label>
            <input
              type="text"
              name="slug"
              placeholder="A single word that describes the post"
              className="bg-neutral-800 text-neutral-200 mt-1 block w-full border border-neutral-400 rounded-xl shadow-md shadow-black  py-2 px-3 focus:outline-none focus:ring-neutral-500 focus:border-neutral-500"
            />
          </div>

          {/* <div className="mb-4">
            <label
              name="img"
              className="block text-sm font-medium text-neutral-500"
            >
              Image Link
            </label>
            <input
              type="text"
              name="img"
              placeholder="Link to the image"
              className="bg-neutral-800 text-neutral-200 mt-1 block w-full border border-neutral-400 rounded-xl shadow-md shadow-black  py-2 px-3 focus:outline-none focus:ring-neutral-500 focus:border-neutral-500"
            />
          </div> */}

          <div className="mb-4">
            <label
              name="isDark"
              className="block text-sm font-medium text-neutral-500"
            >
              Vibe of story
            </label>
            <select
              name="isDark"
              className="bg-neutral-800 text-neutral-200 mt-1 block w-full border border-neutral-400 rounded-xl shadow-md shadow-black  py-2 px-3 focus:outline-none focus:ring-neutral-500 focus:border-neutral-500"
              value={isDarkState}
              onChange={(e) => setIsDarkState(e.target.value === "true")}
            >
              <option value="true">Dark</option>
              <option value="false">Bright</option>
            </select>
          </div>

          <input readOnly hidden type="text" name="userId" value={userId} />
          <input readOnly hidden type="text" name="likes" value={0} />

          <div className=" mb-4">
            <label className="block text-sm font-medium text-neutral-500 ">
              Image
              <input
                className="w-full py-2 px-4 bg-neutral-800  focus:ring-neutral-500 focus:ring-offset-neutral-200 text-neutral-500 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                type="file"
                accept="image/*"
                onChange={handleFileInputChange}
              />
              {base64Image && (
                <div>
                  <img src={base64Image} alt="Uploaded" />
                  {/* <textarea rows={10} cols={50} value={base64Image} readOnly /> */}
                </div>
              )}
              <input name="img" hidden value={base64Image} />
            </label>
          </div>

          <button
            onClick={() => setIsLoading(true)}
            type="submit"
            className="w-full py-2 px-4 bg-neutral-600 hover:bg-neutral-500 focus:ring-neutral-500 focus:ring-offset-neutral-200 text-neutral-300 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
          >
            {isLoading && !state?.error ? "Loading..." : "Submit"}
          </button>

          <div className="flex justify-center">
            {state &&
              state.error === "Please provide valid input for all fields." && (
                <p className="text-red-600">
                  {state.error}
             
                </p>
              )}
          </div>
        </form>
      </div>
    </div>
  );
}
