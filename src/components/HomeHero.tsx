"use client";
import ArrowBox from "@/assets/SVG/ArrowBox";
import UBall from "@/assets/SVG/UBall";
import React from "react";
import { useRouter } from "next/navigation";

const HomeHero = () => {
  const router = useRouter();

  return (
    <div className="w-full px-[16px] lg:px-[80px] py-[40px] lg:py-0 flex flex-col md:flex-row items-start justify-between md:items-center space-y-5 md:space-y-0">
      <div>
        <h3 className="text-[14px] lg:text-[18px] font-medium uppercase text-grey-40">
          get the visibility you need from
        </h3>
        <h2 className="text-[40px] lg:text-[60px] font-semibold uppercase text-grey-90">
          Wac people
        </h2>
      </div>
      <div className="hidden md:block">
        <UBall />
      </div>
      <div>
        <h2 className="text-[28px] lg:text-[48px] font-semibold uppercase text-white flex items-center gap-[10px]">
          Let’s{" "}
          <span
            onClick={() => router.push("/contact-us?type=collaborate")}
            className="cursor-pointer hidden lg:block"
          >
            <ArrowBox />
          </span>
          <span
            onClick={() => router.push("/contact-us?type=collaborate")}
            className="cursor-pointer block lg:hidden"
          >
            <ArrowBox width="80px" height="48px" />
          </span>
        </h2>
        <h2 className="text-[28px] lg:text-[48px] font-semibold uppercase text-white">
          Work Together
        </h2>
      </div>
    </div>
  );
};

export default HomeHero;
