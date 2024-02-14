import Link from "next/link";
import Links from "./links/Links";
import { auth } from "@/lib/auth";
import { AiFillAlipayCircle } from "react-icons/ai";

const Navbar = async () => {
  const session = await auth();
  console.log({ NavbarSession: session });

  return (
    <div className="bg-pink-300 px-7 lg:px-40 flex items-center justify-between h-24">
      <Link href="/" className="text-4xl text-white">
        <AiFillAlipayCircle size={42} />
      </Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
};

export default Navbar;
