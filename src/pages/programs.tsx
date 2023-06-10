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

      <div className="xl:grid  md:block grid-cols-2 sm:block gap-[15px] xl:mt-[72px] sm:mt-[40px] items-center justify-center xl:w-[1279px]  xl:mx-auto md:mx-[40px] sm:mx-[20px]">
        {programPics.map((program, index) => {
          return (
            <div
              key={index}
              className="border-[1px] border-[#667085] rounded-[10px] md:w-[620px]  inline-block p-[20px] xl:h-[458px] xl:w-[620px] xl:mr-[30px] md:gap-[40px]  sm:mb-[15px]"
            >
              <div className="">

              <Image
                src={program.img}
                alt="academic"
                width={592}
                height={328}
                className="mx-[24px] rouded-md"
                />
                </div>
              <p className="text-center leading-[24px] xl:text-[20px] md:text-[16px] sm:text-[15px] font-[500] text-[#667085] mx-[10px]">
                {program.text}
              </p>
              <p
                className="text-center leading-[24px] font-[400] text-[#667085] xl:text-[16px] sm:text-[14px]"
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
