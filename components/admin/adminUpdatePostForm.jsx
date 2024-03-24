"use client";
import { updatePost } from "@/lib/data/postData";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFormState } from "react-dom";

const AdminUpdatePostForm = ({ post }) => {
  const router = useRouter();
  const [state, formAction] = useFormState(updatePost, undefined);
  const [isDarkState, setIsDarkState] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isImageUpdate, setIsImageUpdate] = useState(false);

  const [initialForm, setInitialForm] = useState({
    title: post?.title,
    desc: post?.desc,
    img: post?.img,
    slug: post?.slug,
    id: post?._id,
    isDark: post?.isDark,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInitialForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const submitHandler = async (e) => {
    setIsLoading(true);
    await formAction(initialForm);
    router.push("/admin");
  };

  const [base64Image, setBase64Image] = useState();
  const handleFileInputChange = (event) => {
    setIsImageUpdate(true);
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.onloadend = () => {
      setBase64Image(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="md:pt-20 py-10 flex items-center bg-black  ">
      <div className=" bg-neutral-900 sm:w-4/5 max-w-4xl mx-auto p-8 border-1 rounded-xl shadow-lg shadow-neutral-800 w-screen ">
        <form action={formAction}>
          <h1 className="text-3xl font-bold mb-4 text-neutral-300">
            Edit Post
          </h1>

          <div className="mb-4">
            <label
              name="desc"
              className="block text-sm font-medium text-neutral-500"
            >
              Description
            </label>
            <textarea
              onChange={handleChange}
              value={initialForm.desc}
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
              onChange={handleChange}
              value={initialForm.title}
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
              onChange={handleChange}
              value={initialForm.slug}
              type="text"
              name="slug"
              placeholder="A single word that describes the post"
              className="bg-neutral-800 text-neutral-200 mt-1 block w-full border border-neutral-400 rounded-xl shadow-md shadow-black  py-2 px-3 focus:outline-none focus:ring-neutral-500 focus:border-neutral-500"
            />
          </div>

          <div className="mb-4">
            <label
              name="isDark"
              className="block text-sm font-medium text-neutral-500"
            >
              Vibe of story
            </label>
            <select
              disabled
              name="isDark"
              className="bg-neutral-800 text-neutral-200 mt-1 block w-full border border-neutral-400 rounded-xl shadow-md shadow-black  py-2 px-3 focus:outline-none focus:ring-neutral-500 focus:border-neutral-500"
              value={isDarkState}
              onChange={(e) => setIsDarkState(e.target.value === "true")}
            >
              <option value="true">Dark</option>
              <option value="false">Bright</option>
            </select>
          </div>

          <input
            onChange={handleChange}
            readOnly
            hidden
            type="text"
            name="id"
            value={initialForm.id}
          />
          <input readOnly hidden type="text" name="likes" value={0} />

          <div className="mb-4">
            <label className="block text-sm font-medium text-neutral-500 ">
              Image
              <input
                className="w-full py-2 px-4 bg-neutral-800  focus:ring-neutral-500 focus:ring-offset-neutral-200 text-neutral-500 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                type="file"
                accept="image/*"
                onChange={handleFileInputChange}
              />
              <input
                name="img"
                hidden
                value={base64Image ? base64Image : initialForm.img}
                readOnly
              />
            </label>
          </div>

          {isImageUpdate ? (
            <div className="mb-4">
              <img src={base64Image} alt="Uploaded" />
              {/* <textarea rows={10} cols={50} value={base64Image} readOnly /> */}
            </div>
          ) : (
            <div className="mb-4">
              <img src={initialForm.img} alt="Uploaded" />
              {/* <textarea rows={10} cols={50} value={base64Image} readOnly /> */}
            </div>
          )}

          <button
            onClick={submitHandler}
            type="submit"
            className="w-full py-2 px-4 bg-neutral-600 hover:bg-neutral-500 focus:ring-neutral-500 focus:ring-offset-neutral-200 text-neutral-300 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
          >
            {isLoading ? "Loading..." : "Submit"}
          </button>
          <div className="flex justify-center">
            {state &&
              state.error === "Please provide valid input for all fields." && (
                <p className="text-red-600">{state.error}</p>
              )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminUpdatePostForm;
