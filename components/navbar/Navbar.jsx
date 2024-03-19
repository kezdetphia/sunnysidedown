import Link from "next/link";
import Links from "./links/Links";
import { AiFillAlipayCircle } from "react-icons/ai";
import Image from "next/image";

const Navbar = async () => {
  return (
    <div className="bg-neutral-950 bg:opacity-10 px-7 lg:px-40 flex items-center justify-between h-24">
      <Link href="/" className="text-4xl text-neutral-300">
        {/* <AiFillAlipayCircle size={42} /> */}
        <Image
          src="/logo2.png"
          alt="logo"
          width={60}
          height={60}
          className=" rounded-full"
        />
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
