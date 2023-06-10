import Link from "next/link";
import React from "react";

const QuickLinks = () => {
    const contactLinks = [
        {
            title: "Link to Book Club",
            linkTo: "https://chat.whatsapp.com/Eu7AAzqjKsqIJZBYCB2xMv",
        },
        {
            title: "Link to Book websites",
            linkTo: "https://605a328a4e1f5.site123.me/",
        },
        {
            title: "Link to resources from Faith Conversation / Weekly Theology Classes",
            linkTo: "https://drive.google.com/drive folders/1_TjszbKD9o976skEs2ewkqh vgqmQN_r-?usp=sharing",
        },
        {
            title: "Link to Meditation",
            linkTo: "https://stjosemaria.org/podcast/",
        },
    ];
    return (
        <div>
            {contactLinks.map((item, index) => (
                <div key={index} className="mb-[10px]">
                    <h2  className=" font-poppins font-[400] sm:text-[14px] inline-block text-[#667085] pr-[8px]" >{item.title }</h2>
                    <Link className="text-[#7B9CE2] sm:text-[12px]" href={item.linkTo}target="_blank">
                        {item.linkTo}
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default QuickLinks;
