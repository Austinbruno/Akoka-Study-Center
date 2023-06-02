import Donates from "@/component/molecules/donate";
import Footer from "@/component/layout/footer";
import PageHeading from "@/component/atom/pageHeading";
import Navbar from "@/component/layout/navbar";
import React from "react";

const Donate = () => {
    const forms = [
        {
            placeholders: "Name on card",
        },
        {
            placeholders: "Email Address",
        },
        {
            placeholders: "Phone Number",
        },
        {
            placeholders: "Amount",
        },
    ];
    return (
        <div className="mx-auto ">
            <Navbar />

            <PageHeading title="Donate" />

            <div className="">
                <p className="ml-[90px] mb-[36px] font-[400] text-[18px] leading-[27px] text-[#667085]">
                    {" "}
                    Akoka Study Centre is one of the hundreds of centers around
                    the world inspired by the teachings of St.josemaria Escriva,
                    the <br />
                    Founder of opus Dei - an institution of the Catholic Church
                    that Promotes the universal call to holiness by teaching
                    that <br />
                    professional work and study can be sanctified by doing it
                    well, with love and for the glory.{" "}
                </p>
                <h1 className="font-Inter font-[500] text-[20px] leading-[24px] text-[#344054] mb-[12px] ml-[90px]">
                    Help support us to do more.
                </h1>
                <form className="grid grid-cols-2 gap-[12px] ml-[90px] w-[433px]">
                    {forms.map((form, index) => {
                        return (
                            <input
                                key={index}
                                type="text"
                                placeholder={form.placeholders}
                                className="border-[solid] border-[#667085] border-[1px] rounded-[8px] font-[400] text-[16px] leading-[24px] text-[#667085]"
                            />
                        );
                    })}
                    <div className="">
                        <button className="px-[50px] py-[10px] bg-[#515C9E]  rounded-[8px] font-Inter font-[700] leading-[24px] text-[16px] text-[#fff]">
                            Donate
                        </button>
                    </div>
                </form>
            </div>
            <div className="mt-[100px]">
                <Donates />
            </div>
            <Footer />
        </div>
    );
};

export default Donate;
