import Image from "next/image";
import React from "react";

interface SectionDataType {
  img: string;
  text: string;
}

interface HomeSectionsProps {
  title: string;
  sectionData: SectionDataType[];
}

const HomeSections = (props: HomeSectionsProps) => {
  const { title, sectionData } = props;
  return (
    <div className="pl-[20px] mb-[90px] ">
      <h1 className="font-Inter font-[700] text-[34px] text-center mb-[42px] text-[#344054]">
        {title}
      </h1>
      <div className="grid grid-cols-3 gap-[32px] w-[1279px] mx-auto items-center justify-center">
        {sectionData.map((data, index) => {
          return (
            <div
              key={index}
              
              className="flex flex-col items-center justify-center border-[1px] w-[386px] mx-auto border-[#667085] rounded-[10px] p-[20px]"
            >
              <Image src={data.img} alt="academic" width={350} height={215} />
              <p className="text-center leading-[24px] font-[500] text-[#667085]">
                {data.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeSections;
