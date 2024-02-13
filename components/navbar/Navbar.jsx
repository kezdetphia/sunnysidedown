import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import { auth } from "@/lib/auth";
import { AiFillAlipayCircle } from "react-icons/ai";

const Navbar = async () => {
  const session = await auth();
  console.log({ NavbarSession: session });

  return (
    <div className={`${styles.container} bg-black`}>
      <Link href="/" className={styles.logo}>
        <AiFillAlipayCircle size={42} />
      </Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
};

export default Navbar;
