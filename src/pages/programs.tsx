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
            paragrah:
                "(Library Services, Akoka Book Club( https://605a328a4e1f5.site123.me/ )Study Weekend, First Class Workshop)",
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
            paragrah:
                "( Hangout / Excursions, Documentary Series, Movie Screening )",
        },
    ];
    return (
        <div className="mx-auto ">
            <Navbar />
            <PageHeading title="Programs" />

            <div className="grid grid-cols-2 gap-[15px] mt-[72px] items-center justify-center w-[1279px] mx-auto">
                {programPics.map((program, index) => {
                    return (
                        <div
                            key={index}
                            className="border-[1px] border-[#667085] rounded-[10px] inline-block p-[20px] mr-[30px]"
                        >
                            <Image
                                src={program.img}
                                alt="academic"
                                width={592}
                                height={328}
                                className="mx-[24px]"
                            />
                            <p className="text-center leading-[24px] text-[20px] font-[500] text-[#667085] mt-[10px]">
                                {program.text}
                            </p>
                            <p className="text-center leading-[24px] font-[400] text-[#667085] text-[14px]">
                                {program.paragrah}
                            </p>
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
