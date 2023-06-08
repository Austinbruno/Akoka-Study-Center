import React from "react";
import Logo from "../atom/logo";
import NavLink from "../molecules/navLinks";
import SideLinks from "../molecules/sideLinks";

const Navbar = () => {
  return (
    <div className="py-[10px] sticky top-0 bg-white z-50">
      <div className="w-[1279px] mx-auto flex items-center justify-between">
        <Logo />

        <NavLink />

        <SideLinks />
      </div>
    </div>
  );
};

export default Navbar;
