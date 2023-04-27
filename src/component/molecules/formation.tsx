import React from "react";
import Image from "next/legacy/image";

const Formation = () => {
  const formationImg = "/assets/images/Landing.svg";
  return (
    <div>
      <div className="mt-[64px] mb-[72px]">
        <h1 className="text-[65px] text-justify w-[770px] font-Inter font-[700] leading-[70px] m-auto text-[#344054]">
          Formation in Morals and Virtues for Young Men
        </h1>
      </div>
      <div className="pl-[155px] mb-[90px]">
        <Image src={formationImg} alt="formation" width={1050} height={480} />
      </div>
    </div>
  );
};

export default Formation;
