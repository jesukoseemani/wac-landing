"use client";
import ArrowLeftRound from "@/assets/SVG/icons/ArrowLeftRound";
import ArrowRightRound from "@/assets/SVG/icons/ArrowRightRound";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { ScrollDirection, ScrollState } from "./WorksBox";
import DiagonalArrow from "@/assets/SVG/icons/DiagonalArrow";

interface props {
  title: string;
  content: string;
  link?: string;
}

const FlexBoxLookLike = ({
  data,
  lastIndex,
  index,
}: {
  data: props;
  lastIndex: number;
  index: number;
}) => {
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
  return (
    <div
      className={`${
        index === lastIndex ? "border-t" : "border-y"
      } border-solid border-dark-12 py-[30px] lg:py-[60px] flex flex-col space-y-[30px] lg:space-y-[0px] lg:flex-row lg:items-center lg:space-x-10 `}
    >
      <div className="flex-1">
        <h2 className="uppercase text-grey-50 text-[28px] lg:text-[34px] font-semibold lg:font-normal">
          {data.title}
        </h2>
        <p className="text-grey-50 text-sm lg:text-base my-6 lg:my-10">
          {data.content}
        </p>
        <h3 className="flex items-center text-grey-95 text-[14px] font-medium leading-normal cursor-pointer uppercase underline underline-offset-8 decoration-dark-12 decoration-2">
          VIEW PROJECT{" "}
          <span className="ml-1.5">
            <DiagonalArrow />
          </span>
        </h3>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center relative">
        <Image
          src="/images/clippath.png"
          width={718}
          height={311}
          quality={100}
          objectFit="cover"
          alt="boys"
        />
        <div className="flex items-center space-x-3 border border-solid border-dark-12 rounded-[100px] p-2 w-fit mt-[-20px]">
          <ArrowLeftRound onClick={() => handleScroll({ side: "left" })} />
          <ArrowRightRound onClick={() => handleScroll({ side: "right" })} />
        </div>
      </div>
    </div>
  );
};

export default FlexBoxLookLike;
