import Image from "next/legacy/image";
import React from "react";

const Logo = () => {
  const logo = "/assets/images/akoka.svg";

  return <Image src={logo} alt="logo" width={80} height={80}  />;
};

export default Logo;
