import React from "react";
import HomeSections from "../layout/homeSections";

const Program = () => {
  const programPics = [
    { img: "/assets/images/Academic.png", text: "Academic" },
    { img: "/assets/images/Professional.png", text: "Professional" },
    { img: "/assets/images/MoralFormation.png", text: "Moral Formation" },
  ];

  
  return <HomeSections title="Programs" sectionData={programPics} />;
};

export default Program;
