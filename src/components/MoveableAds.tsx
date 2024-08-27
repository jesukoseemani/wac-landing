import Shinelight from "@/assets/SVG/Shinelight";
import React from "react";

const MoveableAds = ({ classNameProps }: { classNameProps?: string }) => {
  const adsArray = [
    "branding & Design",
    "content creation",
    "event planning & management",
    "digital marketing",
    "Public Relation",
    "Consulting Service",
    "talent development & mentorship",
    "Tech & experiments",
  ];

  return (
    <div
      className={`w-full h-[62px] border-y border-solid border-dark-12 flex items-center overflow-hidden whitespace-nowrap ${
        classNameProps ?? ""
      }`}
    >
      <div className="flex animate-marquee space-x-4">
        {adsArray.concat(adsArray).map((item, index) => (
          <div className="flex items-center" key={`${item}-${index}`}>
            <Shinelight />
            <p className="uppercase text-sm text-purple-90 ml-[6px]">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoveableAds;
