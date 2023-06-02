import React from "react";
import Image from "next/legacy/image";
const OtherWebsite = () => {
  const websites = [
    { img: "/assets/images/ECS.png", text: "ECS" },
    { img: "/assets/images/OpusDei.png", text: "Opus Dei" }
];
  return (
    <div className="pl-[20px] mb-[90px] ml-[80px]">
      <h1 className="font-Inter font-[700] text-[34px] text-center mb-[42px] text-[#344054]">
        Other Websites
      </h1>
      {websites.map((web, index) => {
        return (
          <div
            key={index}
            className="border-[1px] border-[#667085] rounded-[10px] inline-block p-[20px] mr-[30px] mb-[32px]"
          >
            <Image src={web.img} alt="academic" width={350} height={215} />
            <p className="text-center leading-[24px] font-[500] text-[#667085]">
              {web.text}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default OtherWebsite;
