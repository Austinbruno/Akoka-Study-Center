import React, { ReactNode } from "react";

interface ContactInfoProps {
  icon: ReactNode;
  text: string;
  color: string;
}

const ContactInfo = (props: ContactInfoProps) => {
  const { icon, text, color } = props;
  return (
    <div className={`flex items-center ${color}`}>
      {icon}
      <p className="font-[500] font-poppins text-[14px] ml-[10px]">{text}</p>
    </div>
  );
};

export default ContactInfo;
