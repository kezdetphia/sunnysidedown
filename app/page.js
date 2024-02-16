import { auth } from "@/lib/auth";
import Image from "next/image";

export default async function Home() {
  const session = await auth();
  console.log({ HomePAgeUser: session?.user });
  return (
    <div>
      <h1>HOME</h1>
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
    </div>
  );
}
