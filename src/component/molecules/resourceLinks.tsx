import React from "react";
import Image from "next/legacy/image";
import HomeSections from "../layout/homeSections";
const ResourceLinks = () => {
  const resourceLinks = [
    {
      img: "/assets/images/BookWebsite.png",
      text: "Book Websites",
    },
    {
      img: "/assets/images/Theologyclass.png",
      text: "Faith Conversation/ Theology Class",
    },
    {
      img: "/assets/images/Meditation.png",
      text: "Meditations",
    },
    {
      img: "/assets/images/BookClub.png",
      text: "Book Club",
    },
  ];
  return <HomeSections title={"Resource Links"} sectionData={resourceLinks} />;
};

export default ResourceLinks;
