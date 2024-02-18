"use client";

import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <Link
      href={item.path}
      className={`${
        styles.container
      } hover:bg-opacity-60 hover:bg-gray-400 text-gray-200 trainsition-all ease-in duration-500  ${
        pathName === item.path && styles.active
      }`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
