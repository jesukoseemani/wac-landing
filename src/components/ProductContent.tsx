"use client";
import ArrowLeftRound from "@/assets/SVG/icons/ArrowLeftRound";
import ArrowRightRound from "@/assets/SVG/icons/ArrowRightRound";
import React, { useEffect, useRef, useState } from "react";
import { ScrollDirection, ScrollState } from "./WorksBox";
import Image from "next/image";

const ProductContent = ({
  title,
  images,
}: {
  title: string;
  images: string[];
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
    <div className="border-y border-solid border-dark-12 py-[40px] lg:py-[60px] overflow-hidden">
      <div className="flex justify-between items-center w-full mb-5 lg:mb-10">
        <h1 className="text-grey-50 text-[28px] lg:text-[34px] font-semibold uppercase ">
          {title}
        </h1>
        <div className="hidden lg:flex items-center space-x-3 border border-solid border-dark-12 rounded-[100px] p-2">
          <ArrowLeftRound onClick={() => handleScroll({ side: "left" })} />
          <ArrowRightRound onClick={() => handleScroll({ side: "right" })} />
        </div>
      </div>
      <div ref={scrollLeftRef} className="overflow-scroll scrollBarHide">
        <div className="flex space-x-10 w-max">
          {images.map((item, i) => (
            <Image
              key={i}
              src={item}
              width={400}
              height={409}
              quality={100}
              objectFit="cover"
              alt="imgsa"
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center mt-[50px]">
        <div className="lg:hidden flex items-center space-x-3 border border-solid border-dark-12 rounded-[100px] p-2 w-fit justify-center">
          <ArrowLeftRound onClick={() => handleScroll({ side: "left" })} />
          <ArrowRightRound onClick={() => handleScroll({ side: "right" })} />
        </div>
      </div>
    </div>
  );
};

export default ProductContent;
