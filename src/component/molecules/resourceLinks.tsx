import React from "react";
import Image from "next/legacy/image";
import HomeSections from "../layout/homeSections";
const ResourceLinks = () => {
  const resourceLinks = [
    {
      img: "/assets/images/BookWebsite.png",
      text: "Book Websites",
      href: ""
    },
    {
      img: "/assets/images/Theologyclass.png",
      text: "Faith Conversation/ Theology Class",
      href: ""
    },
    {
      img: "/assets/images/Meditation.png",
      text: "Meditations",
      href: ""
    },
    {
      img: "/assets/images/BookClub.png",
      text: "Book Club",
      href: "https://chat.whatsapp.com/Eu7AAzqjKsqIJZBYCB2xMv"
    },
  ];
  return <HomeSections title={"Resource Links"} sectionData={resourceLinks} />;
};

export default ResourceLinks;
