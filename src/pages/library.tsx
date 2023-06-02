import Donates from "@/component/molecules/donate";
import Footer from "@/component/layout/footer";
import Navbar from "@/component/layout/navbar";
import React from "react";
import PageHeading from "@/component/atom/pageHeading";

const Library = () => {
    const forms = [
        {
            placeholders: "Surname",
        },
        {
            placeholders: "Other name",
        },
        {
            placeholders: "Phone Number",
        },
        {
            placeholders: "Email Address",
        },
    ];
    return (
        <div className="mx-auto ">
            <Navbar />
            <PageHeading title="Library" />

            <div className="">
                <p className="ml-[90px] mb-[36px] font-[400] text-[18px] leading-[27px] text-[#667085]">
                    Akoka has a convenient study room stocked with books of
                    several disciplines. It provides an atmosphere of serious{" "}
                    <br /> work. If you want to get stuff done, come to Akoka
                    library.
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
                            Submit
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

export default Library;
