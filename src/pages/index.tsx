import Donate from "@/component/atom/donate";
import Mission from "@/component/atom/mission";
import OtherWebsite from "@/component/atom/otherWebsite";
import Program from "@/component/atom/program";
import ResourceLinks from "@/component/atom/resourceLinks";
import Formation from "@/component/molecules/formation";
import Navbar from "@/component/Navbar";
import React from "react";

const index = () => {
  return (
    <div className=" mx-auto ">
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
