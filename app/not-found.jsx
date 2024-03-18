import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-y-5 text-gray-400 bg-neutral-900 ">
      <h1 className="text-6xl leading-relaxed tracking-wider">
        Ooppss.. That&apos;s a 404!
      </h1>
      <h3 class="text-3xl leading-relaxed tracking-wider">
        That means this page doesn&apos;t exist, but don&apos;t you worry!
      </h3>
      <Link className="cursor-pointer text-blue-600" href={"/"}>
        Return to Home page
      </Link>
    </div>
  );
};

export default NotFound;
