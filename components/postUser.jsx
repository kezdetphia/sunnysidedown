import { auth } from "@/lib/auth";
import { getUser } from "@/lib/data/userData";
import Image from "next/image";

export default async function PostUser({ userId }) {
  const user = await getUser(userId);
  const session = await auth();
  console.log("this isn post user:", session);

  return (
    <div className="flex gap-x-1 justify-center items-center">
      <Image
        src={user?.img ? user.img : "/noavatar.png"}
        alt="user avatar"
        width={25}
        height={25}
        className="rounded-full"
      />
      <div>
        <span>{user?.username ? user?.username : "Unknown"}</span>
      </div>
    </div>
  );
}
