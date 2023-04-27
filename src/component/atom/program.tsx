import React from 'react'
import Image from 'next/legacy/image';
const Program = () => {
    const programPics = [
      { img: "/assets/images/Academic.png", text: "Academic" },
      { img: "/assets/images/Professional.png", text: "Professional" },
      { img:  "/assets/images/MoralFormation.png", text: "Moral Formation" },
    ];
  return (
    <div className="pl-[20px] mb-[90px]">
      <h1 className="font-Inter font-[700] text-[34px] text-center mb-[42px] text-[#344054]">
        Programs
      </h1>
      {programPics.map((program, index) => {
        return (
          <div
            key={index}
            className="border-[1px] border-[#667085] rounded-[10px] inline-block p-[20px] mr-[30px]"
          >
            <Image src={program.img} alt="academic" width={350} height={215} />
            <p className="text-center leading-[24px] font-[500] text-[#667085]">
              {program.text}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Program