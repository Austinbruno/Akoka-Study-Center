import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  const logo = "/assets/images/akoka.svg";

  return (
    <Link href="/">
      <Image src={logo} alt="logo" width={80} height={80} />
    </Link>
  );
};

export default Logo;
