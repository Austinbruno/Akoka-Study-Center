import React from "react";
import Link from "next/link";
const Donates = () => {
  return (
    <div className="bg-[#344255] flex flex-col items-center justify-center h-[376px] sm:px-[20px] ">
      <h1 className="text-[#E4E7EC] leading-[40px] font-Inter font-[700] text-[34px] mb-[10px]">
        Donate
      </h1>
      <p className="xl:w-[860px] text-center leading-[24px] text-[#E4E7EC] font-[400] text-[18.6px] mb-[32px]">
        As a non-profit, Akoka study centre relies entirely on the financial
        support of donors like you to maintain its programming. Donations of any
        size are very much encouraged and greatly appreciated.
      </p>

      <Link
        href="/donate"
        className="py-[15px] xl:w-[182px] md:w-[182px] sm:w-full bg-[#FFF] shadow-md rounded-[5px] font-Inter font-[700] text-center leading-[24px] text-[16px] text-[#344054]"
      >
        Donate
      </Link>
    </div>
  );
};

export default Donates;
