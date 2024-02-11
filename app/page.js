import { auth } from "@/lib/auth";
import Image from "next/image";

export default async function Home() {
  const session = await auth();
  return (
    <div>
      <h1>HOME</h1>
      <h1>{session?.user.name}</h1>
      <h1>{session?.user.email}</h1>
      <Image
        className="rounded-full"
        src={session?.user.image}
        alt="user image"
        width={100}
        height={100}
      />
      <h1>{session?.user.isAdmin}</h1>
    </div>
  );
}
