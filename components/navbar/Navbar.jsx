import Link from "next/link";
import Links from "./links/Links";
import { AiFillAlipayCircle } from "react-icons/ai";

const Navbar = async () => {
  return (
    <div className="bg-gray-900 px-7 lg:px-40 flex items-center justify-between h-24">
      <Link href="/" className="text-4xl text-white">
        <AiFillAlipayCircle size={42} />
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
