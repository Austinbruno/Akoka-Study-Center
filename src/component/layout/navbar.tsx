import React, { useState } from "react";
import Logo from "../atom/logo";
import NavLink from "../molecules/navLinks";
import SideLinks from "../molecules/sideLinks";
import { AiOutlineMenu } from "react-icons/ai";
import { MdCancelPresentation } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);
  const router = useRouter();
  const activeClass = "bg-[#515C9E] p-[5px_25px] text-white rounded-[5px] ";

  const inActiveClass =
    " text-[#515C9E] p-[5px_25px]  text-black rounded-[5px] ";

  const navData = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Programs",
      path: "/programs",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "Donate",
      path: "/donate",
    },
    {
      name: "Library",
      path: "/library",
    },
  ];

  const dropdownClass = dropDown ? "block" : "hidden";

  const handleDropdown = () => {
    setDropDown(!dropDown);
  };

  return (
    <div className="sticky top-0 bg-white z-50 shadow-lg ">
      <div className="xl:w-[1279px] p-[10px_40px] mx-auto flex items-center justify-between">
        <Logo />

        <NavLink />

        <SideLinks />

        <div className="xl:hidden relative">
          <button onClick={handleDropdown}>
          {dropDown ? (
              <MdCancelPresentation size={50} color="#515C9E"  />
            ) : (
              <AiOutlineMenu size={40} color="#515C9E" />
            )}

          </button>

          <div
            className={`${dropdownClass} absolute right-0 flex flex-col font-inter font-[500] text-[15px] text-start pt-[17px] bg-[#fff] w-[150px] shadow-md `}
          >
            {navData.map((data, index) => {
              return (
                <Link
                  key={index}
                  href={data.path}
                  className={
                    router.pathname === data.path ? activeClass : inActiveClass
                  }
                >
                  {data.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
