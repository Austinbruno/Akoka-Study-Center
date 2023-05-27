import Link from "next/link";
import React from "react";

const SideLinks = () => {
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
          className="p-[10px_12px] mr-[30px] bg-[#FFF] shadow-md  rounded-[5px]"
         
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default SideLinks;
