import React from 'react'
import Image from 'next/legacy/image'
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
  return (
    <div className="pl-[20px] mb-[40px] ml-[80px]">
      <h1 className="font-Inter font-[700] text-[34px] text-center mb-[42px] text-[#344054]">
        Resource Links
      </h1>
      {resourceLinks.map((resource, index) => {
        return (
          <div
            key={index}
            className="border-[1px] border-[#667085] rounded-[10px] inline-block p-[20px] mr-[30px] mb-[32px]"
          >
            <Image src={resource.img} alt="academic" width={350} height={215} />
            <p className="text-center leading-[24px] font-[500] text-[#667085]">
              {resource.text}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default ResourceLinks