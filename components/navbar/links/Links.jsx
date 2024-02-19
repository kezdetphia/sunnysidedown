"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { handleLogout } from "@/lib/action";
import NavLink from "./navLink/navLink";
import styles from "./links.module.css";
import { TfiMenu } from "react-icons/tfi";
import { useSession } from "next-auth/react";

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = () => {
  const [open, setOpen] = useState(false);

  const session = useSession();

  const pathName = usePathname();
  useEffect(() => {
    setOpen(false);
  }, [pathName]);

  const menuRef = useRef(null);
  //closes mobile menu when clicked outside
  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setOpen(!open);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  const handleResize = () => {
    setOpen(false); // Close the menu when window is resized
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`${styles.container} text-gray-200`}>
      <div className={`${styles.links}`}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session?.data?.user ? (
          <>
            {session.data.user?.isAdmin && (
              <NavLink item={{ title: "Admin", path: "/admin" }} />
            )}
            <form action={handleLogout}>
              <button className="p-[10px] cursor-pointer font-bold hover:text-gray-400">
                Logout
              </button>
            </form>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>

      <div>
        <TfiMenu
          className={`${styles.menuButton} ${open ? "hidden" : "block"}`}
          alt=""
          width={3}
          height={70}
          onClick={() => setOpen((prev) => !prev)}
        />
      </div>
      {open && (
        <div
          ref={menuRef}
          className="bg-gray-900 m-1 shadow-lg rounded-xl absolute top-24 right-0 w-1/2 h-full z-10 flex flex-col items-center justify-center gap-10 "
        >
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
          {session?.data?.user ? (
            <>
              {session.user?.isAdmin && (
                <NavLink item={{ title: "Admin", path: "/admin" }} />
              )}
              <form action={handleLogout}>
                <button className="p-[10px] cursor-pointer font-bold  hover:text-gray-400">
                  Logout
                </button>
              </form>
            </>
          ) : (
            <NavLink item={{ title: "Login", path: "/login" }} />
          )}
        </div>
      )}
    </div>
  );
};

export default Links;
