import React from "react";

const ProjectHeader = () => {
  return (
    <div className="w-full mt-[40px] lg:mt-[110px] px-[16px] lg:px-[80px] relative">
      <h1 className="text-grey-50 text-sm lg:text-base font-semibold uppercase">
        Projects
      </h1>
      <h3 className="text-white text-[28px] lg:text-[48px] font-semibold uppercase">
        Lorem ipsum dolor sit amet
      </h3>
      <p className="mt-6 text-grey-50 text-sm lg:text-base max-w-[880px]">
        Lorem ipsum dolor sit amet consectetur. Adipiscing sit id ac odio sit
        tristique lectus. Aliquam vel nisl auctor egestas et aenean mattis elit.
        Consequat mattis dictum lectus urna nunc ut. Scelerisque non ullamcorper
        porttitor amet. Vitae commodo vulputate et elementum mauris hendrerit
        libero ultrices leo. Et nulla nisl vel vitae congue sit est magna.
      </p>
      <h2 className="hidden lg:block absolute right-[100px] bottom-[49px] text-grey-50 text-sm font-medium uppercase">
        Scroll Down To See <br /> The Works
      </h2>
    </div>
  );
};

export default ProjectHeader;
