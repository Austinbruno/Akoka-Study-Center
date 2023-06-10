import Navbar from "@/component/layout/navbar";
import React from "react";
import Image from "next/legacy/image";
import Donate from "@/component/molecules/donate";
import Footer from "@/component/layout/footer";
import Donates from "@/component/molecules/donate";
import PageHeading from "@/component/atom/pageHeading";

const Programs = () => {
  const programPics = [
    {
      img: "/assets/images/Academic.png",
      text: "Academic",
      paragrah: `
      <p>(Library Services, Akoka Book Club(<a href="https://605a328a4e1f5.site123.me" style='color:#7B9CE2'> https://605a328a4e1f5.site123.me/</a> )Study Weekend, First Class Workshop)</p>`,
    },
    {
      img: "/assets/images/Professional.png",
      text: "Professional",
      paragrah:
        "(Professional Speaker Series, Professional Mentoring, Leadership Camps, UNIV Nigeria)",
    },
    {
      img: "/assets/images/MoralFormation.png",
      text: "Moral Formation",
      paragrah:
        "( Faith Conversations/ Weekly Theology Classes, Meditations, Personal Spiritual Direction, Monthly Recollection, Spiritual Retreats)",
    },
    {
      img: "/assets/images/cultural.png",
      text: "Cultural Formation",
      paragrah: "( Hangout / Excursions, Documentary Series, Movie Screening )",
    },
  ];
  return (
    <div className="mx-auto ">
      <Navbar />
      <PageHeading title="Programs" />

      <div className="lg:grid grid-cols-2 sm:block gap-[15px] lg:mt-[72px] sm:mt-[40px] items-center justify-center lg:w-[1279px]  lg:mx-auto sm:mx-[20px]">
        {programPics.map((program, index) => {
          return (
            <div
              key={index}
              className="border-[1px] border-[#667085] rounded-[10px] inline-block p-[20px] lg:h-[458px] lg:mr-[30px] sm:mb-[15px]"
            >
              <Image
                src={program.img}
                alt="academic"
                width={592}
                height={328}
                className="mx-[24px] rouded-md"
              />
              <p className="text-center leading-[24px] lg:text-[20px] sm:text-[15px] font-[500] text-[#667085] mx-[10px]">
                {program.text}
              </p>
              <p
                className="text-center leading-[24px] font-[400] text-[#667085] lg:text-[16px] sm:text-[14px]"
                dangerouslySetInnerHTML={{ __html: program.paragrah }}
              ></p>
            </div>
          );
        })}
      </div>
      <div className="mt-[100px]">
        <Donates />
      </div>
      <Footer />
    </div>
  );
};

export default Programs;
