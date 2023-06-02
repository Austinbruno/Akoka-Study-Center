import React from "react";
import { FiMail } from "react-icons/fi";
import ContactInfo from "./contactInfo";

interface EmailProps {
    color: string;
}

const Email = ({ color }: EmailProps) => (
    <ContactInfo
        icon={<FiMail size="20px" />}
        text="akokastudycentre@gmail.com"
        color={color}
    />
);

export default Email;
