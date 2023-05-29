import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const SideLinks = () => {
  const router = useRouter();
  const activeClass =
    "bg-[#515C9E] text-white p-[10px_16px] rounded-[5px]  mx-[26px]";

  const inActiveClass = " text-black p-[10px_12px] mr-[30px] bg-[#FFF] shadow-md rounded-[5px]  mx-[26px]";
  const sideLinks = [
    {
      title: "Donate",
      href: "/donate",
    },
    {
      title: "Library",
      href: "/library",
    },
  ];

  return (
    <div className="">
      {sideLinks.map((link, index) => (
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

export default SideLinks;
