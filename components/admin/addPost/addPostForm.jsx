import { addPost } from "@/lib/data/postData";

export default function AddPostForm({ userId }) {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form action={addPost} className="w-96 p-8 bg-white rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Add Post</h1>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-600"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="desc"
            className="block text-sm font-medium text-gray-600"
          >
            Description
          </label>
          <input
            type="text"
            name="desc"
            id="desc"
            placeholder="Description"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="slug"
            className="block text-sm font-medium text-gray-600"
          >
            Slug
          </label>
          <input
            type="text"
            name="slug"
            id="slug"
            placeholder="Slug"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="img"
            className="block text-sm font-medium text-gray-600"
          >
            Image Link
          </label>
          <input
            type="text"
            name="img"
            id="img"
            placeholder="image-link"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <input
          readOnly
          hidden
          type="text"
          name="userId"
          id="userId"
          value={userId}
        />
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
