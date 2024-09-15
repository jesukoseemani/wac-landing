"use client";
import ArrowLeftRound from "@/assets/SVG/icons/ArrowLeftRound";
import ArrowRightRound from "@/assets/SVG/icons/ArrowRightRound";
import DiagonalArrow from "@/assets/SVG/icons/DiagonalArrow";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

// Define the types for the scroll state
export type ScrollDirection = "left" | "right" | "";

// Define the type for the state that holds the scroll direction
export interface ScrollState {
  side: ScrollDirection;
  left?: boolean;
  right?: boolean;
}

const WorksBox = () => {
  const scrollLeftRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

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
      title: "Faces of Resilience",
      date: "March 2022",
      route: "/",
      image: "/images/ankarawoman.png",
    },
    {
      title: "A Wedding Tale",
      date: "April 2022",
      route: "/",
      image: "/images/ankarawoman.png",
    },
    {
      title: "Product Elegance",
      date: "January 2022",
      route: "/",
      image: "/images/ankarawoman.png",
    },
    {
      title: "A Wedding Tale",
      date: "April 2022",
      route: "/",
      image: "/images/ankarawoman.png",
    },
    {
      title: "Product Elegance",
      date: "January 2022",
      route: "/",
      image: "/images/ankarawoman.png",
    },
  ];
  return (
    <div className="w-full mt-[166px] lg:mt-[90px] px-[16px] lg:px-[80px] overflow-hidden">
      {" "}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <div>
          <h3 className="text-grey-50 text-sm lg:text-lg font-semibold uppercase">
            Portfolio
          </h3>
          <h2 className="text-white text-[28px] lg:text-[48px] font-semibold uppercase">
            Explore some of our work.
          </h2>
        </div>
        <div className="my-5 lg:my-0 flex items-center lg:space-x-5">
          <div className="hidden lg:flex items-center space-x-3 border border-solid border-dark-12 rounded-[100px] p-2">
            <ArrowLeftRound onClick={() => handleScroll({ side: "left" })} />
            <ArrowRightRound onClick={() => handleScroll({ side: "right" })} />
          </div>
          <button
            onClick={() => router.push("/projects")}
            className="relative overflow-hidden w-[150px] h-[49px] bg-dark-12 rounded-lg border border-solid border-dark-20 text-sm font-medium text-white transition-all duration-600 ease-out before:absolute before:inset-0 before:bg-yellow-55 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 before:text-white hover:before:scale-x-100 before:z-0 before:rounded-lg before:overflow-hidden"
          >
            <p className="relative z-10">View All Works {"->"}</p>
          </button>
        </div>
      </div>
      <div className="border-b border-solid border-dark-12 lg:mt-7" />
      <div
        ref={scrollLeftRef}
        className="flex space-x-[30px] items-center mt-[40px] lg:mt-[60px] overflow-scroll scrollBarHide"
      >
        {data.map((item, i) => (
          <div className="w-full min-w-[358px] sm:min-w-[406.33px]" key={i}>
            <Image
              src={item.image}
              width={406.3}
              height={428}
              quality={100}
              objectFit="cover"
              alt="anka"
            />
            <div className="flex justify-between items-start w-full mt-5">
              <div className="flex flex-col">
                <h3 className="text-grey-80 text-[18px] font-medium leading-normal ">
                  {item.title}
                </h3>
                <p className="text-grey-50 text-[16px] leading-normal">
                  {item.date}
                </p>
              </div>
              <h3
                onClick={() => router.push("/projects")}
                className="flex items-center text-grey-95 text-[14px] font-medium leading-normal cursor-pointer mr-2"
              >
                VIEW PROJECT{" "}
                <span className="ml-1.5">
                  <DiagonalArrow />
                </span>
              </h3>
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

export default WorksBox;
