import { auth } from "@/lib/auth";
import Image from "next/image";

export default async function Home() {
  const session = await auth();
  console.log("homepage load");

  return (
    <div className="flex flex-col justify-center items-center h-screen  bg-pink-300">
      <h1 className="text-6xl">HomePage</h1>
      <span className="text-5xl">
        I need the text here and you can think of an image
      </span>
      <h1>{session?.user.name}</h1>
      <h1>{session?.user.email}</h1>
      <Image
        className="rounded-full"
        src={session?.user.image ? session.user.image : "/noavatar.png"}
        alt="user image"
        width={100}
        height={100}
      />
      <h1>{session?.user.isAdmin ? "admin" : "no"}</h1>
      <h1>{session?.user.id}</h1>
      {/* <div className="w-1/2">
        <Image
        width={400}
        height={400}
        alt=""
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHlmY2MwMGE1MjdsZTVldzZkaTE3ZXFzZWh3bmp6N2NmNjF3MDAxcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WNiX60enqL6VBN92wI/giphy.gif"
        />
      </div> */}
    </div>
  );
}
