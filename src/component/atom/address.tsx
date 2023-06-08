import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import ContactInfo from "./contactInfo";

interface AddressProps {
  color: string;
}

const Address = ({ color }: AddressProps) => (
  <ContactInfo
    icon={<HiOutlineLocationMarker size="20px" />}
    text="5 Abiodun Street, off Lawani St, Onitiri Yaba, Lagos"
    color={color}
  />
);

export default Address;
