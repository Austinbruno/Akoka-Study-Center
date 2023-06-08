import Image from "next/legacy/image";
import React from "react";
import { FiMail } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";
import Address from "../atom/address";
import Email from "../atom/email";

const Footer = () => {
  const logo = "/assets/images/akoka.svg";
  const footerItems = [
    {
      icon: <FiMail />,
      text: "akokastudycentre@gmail.com",
    },
    {
      icon: <HiOutlineLocationMarker />,
      text: "5 Abiodun Street, off Lawani St, Onitiri Yaba, Lagos",
    },
  ];

  const footerNumbers = [
    {
      icon: <BsTelephone />,
      text: "+2349122539863",
    },
    {
      icon: <BsWhatsapp />,
      text: "+2349122539863",
    },
  ];
  return (
    <div className="w-[1300px] mx-auto">
      <div className="flex items-center justify-center p-[50px_80px]">
        <div className="mr-[34px]">
          <Image src={logo} alt="logo" width={120} height={120} />
        </div>

        <div className="grid grid-flow-col gap-[54px]">
          <div className="grid place-self-center ">
            <div className="mb-[30px]">
              <Email color="text-[#475467]" />
            </div>
            <Address color="text-[#475467]" />
          </div>

          <div className="flex flex-col ">
            {footerNumbers.map((num, index) => {
              return (
                <div key={index} className="flex items-center m-[10px_0px]">
                  <div className="w-[20px] text-[#475467] ">{num.icon}</div>
                  <p className="font-[500] text-[16px] text-[#475467] leading-[30px] ">
                    {num.text}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-[10px]">
            <p className="mb-[10px] font-[500] text-[16px] leading-[24px] text-[#475467]">
              Join the mailing list for activity updates.
            </p>
            <div>
              <input
                type="text"
                placeholder="Email Address"
                className="border-[solid] border-[#667085] border-[1px]font-[400] font-poppins text-[14px] leading-[24px] text-[#667085] rounded-[8px] mr-[16px]"
              />
              <button className=" p-[10px_24px]  bg-[#515C9E] rounded-[10px] font-Inter font-[500] leading-[24px] text-[16px] text-[#fff]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[2px] w-[90%] bg-[#8C94A6] mx-auto" />

      <p className="ml-[94px] text-[#98A2B3] text-[16px] leading-[24px] font-[500] my-[50px]">
        Copyright &copy; 2023 Akoka study centre
      </p>
    </div>
  );
};

export default Footer;
