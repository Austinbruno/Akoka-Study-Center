import React from "react";

interface PageHeadingProps {
    title: string;
}

const PageHeading = ({ title }: PageHeadingProps) => {
    return (
        <h1 className="text-center justify-center font-[700] text-[34px] leading-[40px] text-[#344054] my-[70px]">
            {title}
        </h1>
    );
};

export default PageHeading;
