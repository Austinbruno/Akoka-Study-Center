import Image from "next/legacy/image";
import React from "react";
import { FiMail } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
    const logo = "/assets/images/akoka.svg";
    const footerItems = [
        {
            icon: <FiMail />,
            text: "akokastudycentre@gmail.com",
        },
        {
            icon: <BsTelephone />,
            text: "+2349122539863",
        },
        {
            text: "Join the mailing list for activity updates.",
        },
        {
            icon: <HiOutlineLocationMarker />,
            text: "5 Abiodun Street, off Lawani St, Onitiri Yaba, Lagos",
        },
        {
            icon: <BsWhatsapp />,
            text: "+2349122539863",
        },
    ];
    return (
        <div className="flex justify-evenly my-[50px]">
            <div className="ml-[80px]">

            <Image src={logo} alt="logo" width={120} height={120} />
            </div>
            <div className="grid grid-cols-3 h-[60px]">
                {footerItems.map((footerItem, index) => {
                    return (
                        <div key={index} className="flex items-center pt-[18px] ">
                            <div className="w-[20px] text-[#475467] ">
                                {footerItem.icon}
                            </div>
                            <p className="font-[500] text-[16px] text-[#475467] leading-[30px] ">
                                {footerItem.text}
                            </p>
                          
                        </div>
                      
                    );
                })}
            </div>
        </div>
    );
};

export default Footer;
