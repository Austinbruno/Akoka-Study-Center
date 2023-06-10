import Image from "next/legacy/image";
import React from "react";
import { FiMail } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";
import Address from "../atom/address";
import Email from "../atom/email";
import SubscribeForNewsletter from "../molecules/subscribeForNewsletter";

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
    <div className="xl:w-[1440px] mx-auto sm:p-[30px_22px] ">
      <div className="xl:flex items-start justify-center xl:p-[50px_80px]">
        <div className="sm:flex items-center justify-between">
          <div className="xl:mr-[54px] md:flex md:items-start">
            <div className="md:w-[80px] md:h-[80px] md:mr-[36px] xl:w-[120px] xl:h-[120px] sm:w-[80px] sm:h-[80px] ">
              <Image src={logo} alt="logo" width={120} height={120} />
            </div>

            <div>
              <div className="md:flex xl:hidden sm:hidden flex-col items-start sm:mt-[10px]">
                <div className="xl:mb-[30px] md:mb-[10px] sm:mb-[8px]">
                  <Email color="text-[#475467]" />
                </div>
                <Address color="text-[#475467]" />
              </div>

              <div className="md:grid md:grid-flow-col md:gap-[60px] md:mt-[10px] md:items-start md:justify-between xl:hidden sm:hidden">
                <div className="xl:flex md:flex flex-col sm:hidden">
                  {footerNumbers.map((num, index) => {
                    return (
                      <div key={index} className="flex items-center mb-[10px]">
                        <div className="w-[20px] text-[#475467] ">
                          {num.icon}
                        </div>
                        <p className="font-[500] text-[16px] text-[#475467] leading-[30px] ">
                          {num.text}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <SubscribeForNewsletter />
              </div>
            </div>
          </div>

          <div className="xl:hidden md:hidden">
            {footerNumbers.map((num, index) => {
              return (
                <div key={index} className="flex items-center m-[10px_0px]">
                  <div className="w-[20px] text-[#475467]">{num.icon}</div>
                  <p className="font-[500] text-[16px] text-[#475467] leading-[30px] ">
                    {num.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="xl:grid grid-flow-col gap-[54px]">
          <div className="xl:flex md:hidden flex-col items-start sm:mt-[10px]">
            <div className="xl:mb-[30px] sm:mb-[8px]">
              <Email color="text-[#475467]" />
            </div>
            <Address color="text-[#475467]" />
          </div>

          <div className="md:hidden xl:grid xl:grid-flow-col xl:gap-[50px] xl:justify-between ">
            <div className="xl:flex md:flex flex-col sm:hidden">
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
            <SubscribeForNewsletter />
          </div>
        </div>
      </div>

      <div className="h-[2px] xl:w-[90%] bg-[#8C94A6] mx-auto" />

      <p className="xl:ml-[94px] text-[#98A2B3] text-[16px] leading-[24px] font-[500] lg:my-[50px] sm:mt-[15px]">
        Copyright &copy; 2023 Akoka study centre
      </p>
    </div>
  );
};

export default Footer;
