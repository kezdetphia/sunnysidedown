import React from "react";
import { useSession } from "next-auth/react";

export default function Contact() {
  return (
    <div className="md:pt-20 py-10 flex items-center ">
      <div className=" bg-gray-600 w-4/5 max-w-4xl mx-auto p-8 border-1 rounded-lg shadow-2xl shadow-gray-900 text-gray-900">
        <form action={null}>
          <h1 className="text-3xl font-bold mb-4 text-gray-300">Contact Me</h1>
          <div className="mb-4">
            <label
              name="title"
              className="block text-sm font-medium text-gray-400"
            >
              Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Jane Doe"
              className="bg-gray-500 mt-1 block w-full border border-gray-300 rounded-md shadow-md shadow-gray-400 py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
            />
          </div>

          <div className="mb-4">
            <label
              name="title"
              className="block text-sm font-medium text-gray-400"
            >
              Your Email
            </label>
            <input
              type="text"
              name="name"
              placeholder="janedoe@example.com"
              className="bg-gray-500 mt-1 block w-full border border-gray-300 rounded-md shadow-md shadow-gray-400 py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
            />
          </div>

          <div className="mb-4">
            <label
              name="desc"
              className="block text-sm font-medium text-gray-400"
            >
              Message
            </label>
            <textarea
              name="desc"
              placeholder="One day baby..."
              className="bg-gray-500 mt-1 block w-full border border-gray-300 rounded-md shadow-md shadow-gray-400 py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500 resize-none whitespace-pre-wrap"
              rows="10" // Set the number of visible text lines here
            ></textarea>
          </div>

          <div className="w-full flex justify-center pt-5">
            <button
              type="submit"
              className=" w-1/5 py-2 px-4 bg-gray-900 hover:bg-gray-800 focus:ring-gray-500 focus:ring-offset-gray-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
