import React from "react";
import { BsTelephone } from "react-icons/bs";
import ContactInfo from "./contactInfo";

interface PhoneNumberProps {
    color: string;
}

const PhoneNumber = ({ color }: PhoneNumberProps) => (
    <ContactInfo
        icon={<BsTelephone size="20px" />}
        text="+2349122539863"
        color={color}
    />
);

export default PhoneNumber;
