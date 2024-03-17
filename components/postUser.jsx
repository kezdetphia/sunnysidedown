import { getUser } from "@/lib/data/userData";
import Image from "next/image";

export default async function PostUser({ userId, isDark }) {
  const user = await getUser(userId);

  return (
    <div className="flex gap-x-3 justify-center items-center">
      <Image
        src={user?.img ? user.img : "/noavatar.png"}
        alt="user avatar"
        width={25}
        height={25}
        className="rounded-full"
      />
      <div>
        <span className={isDark ? "text-neutral-200" : "text-neutral-700"}>
          {user?.username ? user?.username : "Unknown"}
        </span>
      </div>
    </div>
  );
}
