"use client";

import ArrowLeftRound from "@/assets/SVG/icons/ArrowLeftRound";
import ArrowRightRound from "@/assets/SVG/icons/ArrowRightRound";
import React, { useEffect, useRef, useState } from "react";
import { ScrollDirection, ScrollState } from "./WorksBox";
import FluidUpBg from "@/assets/SVG/icons/FluidUpBg";
import FluidDownBg from "@/assets/SVG/icons/FluidDownBg";
import Ratings from "./Ratings";

const Testimonial = ({ classNameProps }: { classNameProps?: string }) => {
  const scrollLeftRef = useRef<HTMLDivElement | null>(null);

  const [scrollX, setScrollX] = useState<ScrollState>({
    side: "",
  });

  const handleScroll = (data: { side: ScrollDirection }) => {
    setScrollX((prev) => ({ ...prev, side: data.side }));
  };

  useEffect(() => {
    if (scrollLeftRef.current) {
      if (scrollX.side === "right") {
        scrollLeftRef.current.scrollLeft += 200;
      } else if (scrollX.side === "left") {
        scrollLeftRef.current.scrollLeft -= 200;
      }
    }
  }, [scrollX]);
  const data = [
    {
      name: "Emily Johnson",
      city: "USA, California",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sapien nibh, ullamcorper et sem eget.",
      rating: 4,
    },
    {
      name: "John Smith",
      city: "USA, California",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sapien nibh, ullamcorper et sem eget.",
      rating: 2.2,
    },
    {
      name: "Samantha Davis",
      city: "USA, California",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sapien nibh, ullamcorper et sem eget.",
      rating: 3.3,
    },
    {
      name: "John Smith",
      city: "USA, California",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sapien nibh, ullamcorper et sem eget.",
      rating: 2.2,
    },
    {
      name: "Samantha Davis",
      city: "USA, California",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sapien nibh, ullamcorper et sem eget.",
      rating: 3.3,
    },
  ];
  return (
    <div
      className={`w-full px-[16px] lg:px-[80px] ${
        classNameProps ?? "mt-[80px] lg:mt-[163px]"
      }`}
    >
      <h3 className="text-grey-50 text-sm lg:text-base font-semibold uppercase">
        Testimonials
      </h3>
      <h2 className="text-white text-[28px] lg:text-[48px] font-semibold uppercase">
        What our Clients Say
      </h2>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <div>
          <h3 className="text-grey-40 text-sm lg:text-base uppercase">
            Total Reviews
          </h3>
          <h2 className="text-grey-80 text-[20px] lg:text-[24px] font-medium uppercase">
            323
          </h2>
        </div>
        <div className="my-5 lg:my-0 flex items-center lg:space-x-5">
          <div className="hidden lg:flex items-center space-x-3 border border-solid border-dark-12 rounded-[100px] p-2">
            <ArrowLeftRound onClick={() => handleScroll({ side: "left" })} />
            <ArrowRightRound onClick={() => handleScroll({ side: "right" })} />
          </div>
          {/* <button className="w-[193px] h-[49px] bg-dark-12 rounded-lg border border-solid border-dark-20 text-sm font-medium text-white">
            View All Testimonials {"->"}
          </button> */}
        </div>
      </div>
      <div className="border-b border-solid border-dark-12 mt-5 lg:mt-[40px]" />
      <div
        ref={scrollLeftRef}
        className="mt-[60px] flex justify-between  w-full space-x-5 overflow-scroll scrollBarHide"
      >
        {data.map((item, i) => (
          <div
            className="w-full min-w-[358px] sm:min-w-[408.33px] rounded-[10px] border border-solid border-dark-12 bg-dark-6 p-[30px] relative overflow-hidden"
            key={i}
          >
            <h2 className="text-grey-90 text-base lg:text-[18px] font-medium">
              {item.name}
            </h2>
            <h3 className="text-grey-40 text-sm lg:text-base">{item.city}</h3>
            <div className="my-6">
              <Ratings rating={item.rating} />
              {item.rating}
            </div>
            <p className="text-grey-90 text-base lg:text-[18px] font-medium z-40">
              {item.comment}
            </p>
            <div className="absolute top-0 right-0 z-[-100px]">
              <FluidUpBg />
            </div>
            <div className="absolute bottom-0 left-0 mix-blend-overlay">
              <FluidDownBg />
            </div>
          </div>
        ))}
      </div>
      <div className="lg:hidden flex justify-center items-center mt-10 space-x-3 border border-solid border-dark-12 rounded-[100px] p-2 w-fit m-auto">
        <ArrowLeftRound onClick={() => handleScroll({ side: "left" })} />
        <ArrowRightRound onClick={() => handleScroll({ side: "right" })} />
      </div>
    </div>
  );
};

export default Testimonial;
