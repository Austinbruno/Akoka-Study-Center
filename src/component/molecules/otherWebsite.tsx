import React from "react";
import Image from "next/legacy/image";
import HomeSections from "../layout/homeSections";
const OtherWebsite = () => {
  const websites = [
    { img: "/assets/images/ECS.png", text: "ECS" },
    { img: "/assets/images/OpusDei.png", text: "Opus Dei" },
  ];
  return <HomeSections title="Other Websites" sectionData={websites} />;
};

export default OtherWebsite;
