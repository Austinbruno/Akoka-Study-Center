import React from "react";
import Link from "next/link";
const Donate = () => {
  return (
    <div className="bg-[#344255] align-center h-[376px] px-[290px] pt-[136px] pb-[186px]">
      <h1 className="text-[#E4E7EC] leading-[40px] font-Inter font-[700] text-[34px]  mb-[10px] pl-[320px]">
        Donate
      </h1>
      <p className="leading-[24px] text-[#E4E7EC] font-[400] text-[18.6px] mb-[32px]">
        As a non-profit, Akoka study centre relies entirely on the financial
        support of donors like you to maintain its programming. Donations of any
        size are very much encouraged and greatly appreciated.
      </p>

      <Link
        href={"!"}
        className="ml-[300px] px-[60px] py-[15px] bg-[#FFF] shadow-md rounded-[5px] font-Inter font-[700] leading-[24px] text-[16px] text-[#344054]"
      >
        Donate{" "}
      </Link>
    </div>
  );
};

export default Donate;
