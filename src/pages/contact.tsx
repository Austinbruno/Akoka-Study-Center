import PageHeading from "@/component/atom/pageHeading";
import Map from "@/component/molecules/map";
import QuickLinks from "@/component/molecules/quickLinks";
import Navbar from "@/component/layout/navbar";
import React, { ReactNode } from "react";
import Address from "@/component/atom/address";
import PhoneNumber from "@/component/atom/phoneNumber";
import Email from "@/component/atom/email";
import Footer from "@/component/layout/footer";
import Donates from "@/component/molecules/donate";

type BalabluType = {
    icon: ReactNode;
};

const Contact = () => {
    const balablu: BalabluType[] = [
        {
            icon: <Address color="text-[#667085]" />,
        },
        {
            icon: <PhoneNumber color="text-[#667085]" />,
        },
        {
            icon: <Email color="text-[#667085]" />,
        },
    ];

    return (
        <div className="mx-auto ">
            <Navbar />

            <PageHeading title="Contact Us" />

            <div className="flex  items-center gap-[47px] justify-center w-[1279px] mx-auto">
                <Map />
                <div>
                    <h1 className="font-Inter font-[500] text-[20px] leading-[24px] mb-[18px] text-[#344054]">
                        Akoka Study Centre
                    </h1>

                    <div>
                        {balablu.map((bulaba, index) => {
                            return (
                                <div key={index} className="mb-[10px]">
                                    {bulaba.icon}
                                </div>
                            );
                        })}
                    </div>

                    <QuickLinks />
                </div>
            </div>
            <div className="mt-[100px]">
                <Donates />
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
