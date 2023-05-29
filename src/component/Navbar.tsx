import React from "react";
import Logo from "./atom/logo";
import NavLink from "./molecules/navLinks";
import SideLinks from "./molecules/sideLinks";

 
const Navbar = ( ) => {
 

  return (
    <div className="flex items-center justify-between mt-[24px] ml-[80px]  static">
      <Logo />

      <NavLink />

      <SideLinks />
    </div>
  );
};

export default Navbar;
