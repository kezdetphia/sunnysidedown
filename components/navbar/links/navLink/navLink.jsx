"use client";

import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {
  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      className={`${styles.container} hover:bg-opacity-50 hover:bg-slate-50 ${
        pathName === item.path && styles.active
      }`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
