import React from "react";

const SubscribeForNewsletter = () => {
  return (
    <div className="xl:mt-[10px] md:mb-[40px]">
      <p className="xl:mb-[10px] md:mb-[10px] sm:my-[5px] font-[500] text-[16px] leading-[24px] text-[#475467]">
        Join the mailing list for activity updates.
      </p>
      <div className="sm:flex sm:flex-col md:grid md:grid-flow-col md:items-center xl:block">
        <input
          type="text"
          placeholder="Email Address"
          className="border-[solid] border-[#667085] border-[1px] font-[400] font-poppins text-[14px] leading-[24px] text-[#667085] rounded-[8px] xl:mr-[16px] md:mr-[16px] md:h-[44px] md:w-[233px]"
        />
        <button className="p-[10px_24px] sm:mt-[8px] sm:mb-[30px] md:mb-[0] md:mt-[0] bg-[#515C9E] rounded-[10px] font-Inter font-[500] leading-[24px] text-[16px] text-[#fff]">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default SubscribeForNewsletter;
