import Donate from "@/component/atom/donate";
import Mission from "@/component/atom/mission";
import OtherWebsite from "@/component/atom/otherWebsite";
import Program from "@/component/atom/program";
import ResourceLinks from "@/component/atom/resourceLinks";
import Formation from "@/component/molecules/formation";
import Navbar from "@/component/Navbar";
import Image from "next/legacy/image";
import React from "react";

const index = () => {
  return (
    <div className="w-[1300px] mx-auto ">
      <Navbar />
      <Formation />
      <Program />
      <Mission />
      <ResourceLinks />
      <OtherWebsite />
      <Donate />
    </div>
  );
};

export default index;
