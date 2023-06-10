import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const NavLink = () => {
  const router = useRouter();
  const activeClass =
    "bg-[#515C9E] text-white p-[10px_16px] rounded-[5px] mx-[26px]";

  const inActiveClass = " text-black p-[10px_16px] rounded-[5px] mx-[26px]";

  const navLinks = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Programs",
      href: "/programs",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  return (
    <div className="sm:hidden xl:flex text-[16px] pr-[56px] font-inter font-[500]">
      {navLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className={
            router.pathname === link.href ? activeClass : inActiveClass
          }
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default NavLink;
