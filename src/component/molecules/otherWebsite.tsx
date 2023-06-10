import React from "react";
import Image from "next/legacy/image";
import HomeSections from "../layout/homeSections";
const OtherWebsite = () => {
  const websites = [
    { img: "/assets/images/ECS.png", text: "ECS", href: "http://ecs.org.ng"  },
    { img: "/assets/images/OpusDei.png", text: "Opus Dei", href: "http://Opusdei.org.ng"  },
  ];
  return <HomeSections title="Other Websites" sectionData={websites}  />;
};

export default OtherWebsite;
