import Image from "next/image";
import Link from "next/link";
import React from "react";

interface SectionDataType {
  img: string;
  text: string;
  href: string;
}

interface HomeSectionsProps {
  title: string;
  sectionData: SectionDataType[];
}

const HomeSections = (props: HomeSectionsProps) => {
  const { title, sectionData } = props;
  return (
    <div className=" sm:px-[10px] mb-[90px] ">
      <h1 className="font-Inter font-[700] text-[34px] text-center mb-[42px] text-[#344054]">
        {title}
      </h1>
      <div className="lg:grid grid-cols-3 gap-[32px] lg:w-[1279px] mx-auto items-center justify-center">
        {sectionData.map((data, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center sm:mb-[20px] border-[1px] lg:w-[386px] mx-auto border-[#667085] rounded-[10px] p-[20px]"
            >
              <Image src={data.img} alt="academic" width={350} height={215} />
              <Link
                href={data.href}
                className="text-center leading-[24px] font-[500] text-[#667085]"
              >
                {data.text}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeSections;
