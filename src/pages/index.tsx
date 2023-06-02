import Donate from "@/component/molecules/donate";
import Footer from "@/component/layout/footer";
import Mission from "@/component/molecules/mission";
import OtherWebsite from "@/component/molecules/otherWebsite";
import Program from "@/component/molecules/program";
import ResourceLinks from "@/component/molecules/resourceLinks";
import Formation from "@/component/molecules/formation";
import Navbar from "@/component/layout/navbar";
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
            <Footer />
        </div>
    );
};

export default index;
