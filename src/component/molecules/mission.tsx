import React from "react";
import Image from "next/legacy/image";
import PageHeading from "../atom/pageHeading";
const Mission = () => {
  const missionImg = "/assets/images/AboutUs.jpg";
  return (
    <>
      <PageHeading title="What is Akoka Study Centre?" />
      <div className="flex justify-center mb-[90px] ">
        <div>
          <Image
            src={missionImg}
            alt="mission"
            width={590}
            height={400}
            objectFit="cover"
          />
        </div>
        <div className="pl-[17px] w-[593px] text-justify mt-[80px]">
          <p className="text-[#667085] font-[400] leading-[24px] text-[16px] font-poppins">
            Akoka Study Centre is a Project of Education Co-operation society of
            Nigeria, which aims to complement the academic, social and moral
            formation that young men and students receive from tertiary
            institutions in view of helping these youth acquire and grow good
            leadership qualities.
          </p>
          <h1 className="leading-[24px] font-[500] font-inter text-[20px] mb-[8px] text-[#344054] pt-[32px]">
            Our Mission
          </h1>
          <p className="leading-[24px] text-[16px] font-poppins font-[400] text-[#667085]">
            Akoka Study Centre challenges young men to discover and achieve
            their life purpose through activities that foster cultural, moral
            and professional growth.
          </p>
        </div>
      </div>
    </>
  );
};

export default Mission;
