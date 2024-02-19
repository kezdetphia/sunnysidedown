export default function Contact() {
  return (
    <div className="md:pt-20 py-10 flex items-center bg-neutral-950  ">
      <div className=" bg-neutral-900  w-4/5 max-w-4xl mx-auto p-8 border-1 rounded-lg shadow-2xl shadow-neutral-900 text-neutral-900">
        <form action={null}>
          <h1 className="text-3xl font-bold mb-4 text-neutral-300">
            Contact Me
          </h1>
          <div className="mb-4">
            <label
              name="title"
              className="block text-sm font-medium text-neutral-600"
            >
              Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Jane Doe"
              className="bg-neutral-800 text-neutral-300 mt-1 block w-full border border-neutral-800 rounded-md shadow-md shadow-neutral-500 py-2 px-3 focus:outline-none focus:ring-neutral-500 focus:border-neutral-500"
            />
          </div>

          <div className="mb-4">
            <label
              name="title"
              className="block text-sm font-medium text-neutral-600"
            >
              Your Email
            </label>
            <input
              type="text"
              name="name"
              placeholder="janedoe@example.com"
              className="bg-neutral-800 text-neutral-300  mt-1 block w-full border border-neutral-800 rounded-md shadow-md shadow-neutral-500 py-2 px-3 focus:outline-none focus:ring-neutral-500 focus:border-neutral-500"
            />
          </div>

          <div className="mb-4">
            <label
              name="desc"
              className="block text-sm font-medium text-neutral-600"
            >
              Message
            </label>
            <textarea
              name="desc"
              placeholder="One day baby..."
              className="bg-neutral-800 text-neutral-300 mt-1 block w-full border border-neutral-800 rounded-md shadow-md shadow-neutral-500 py-2 px-3 focus:outline-none focus:ring-neutral-500 focus:border-neutral-500 resize-none whitespace-pre-wrap"
              rows="10" // Set the number of visible text lines here
            ></textarea>
          </div>

          <div className="w-full flex justify-center pt-5">
            <button
              type="submit"
              className=" w-1/5 py-2 px-4 text-neutral-400 bg-neutral-800 hover:bg-neutral-700 focus:ring-neutral-500 focus:ring-offset-neutral-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
