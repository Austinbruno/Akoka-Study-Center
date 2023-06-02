import Mission from "@/component/molecules/mission";
import Navbar from "@/component/layout/navbar";
import Image from "next/legacy/image";
import { BsTelephone } from "react-icons/bs";
import React from "react";
import Donate from "@/component/molecules/donate";
import Footer from "@/component/layout/footer";
import PageHeading from "@/component/atom/pageHeading";

const About = () => {
    const phone = "/assets/images/phone.png";
    return (
        <div className="mx-auto ">
            <Navbar />
            <PageHeading title="What is Akoka Study Centre?" />

            <div className="mt-[106px]">
                <Mission />
            </div>
            <div className=" mt-[-42px] ml-[130px]">
                <p className="mb-[13px] w-[106px] h-[24px] font-[500] leading-[24px] text-[20px] text-[#344054]">
                    Contact Us
                </p>
                <div className="flex items-center mb-[10px]">
                    <BsTelephone size={23} color="#667085" />
                    <p className="text-[#667085] font-[500] leading-[30px] w-[161px] text-[16px] justify-[center] pl-[9px]">
                        +234(0)9122539863
                    </p>
                </div>
                <p className=" w-[429px]font-[400] text-[16px] leading-[24px] text-[#667085]">
                    For further enquires contact the Management Team <br />{" "}
                    Director ( Chima Ikenganyia Esq. ) <br /> 07067008778.
                </p>
            </div>
            <div className="mt-[100px]">
                <Donate />
            </div>
            <Footer />
        </div>
    );
};

export default About;
