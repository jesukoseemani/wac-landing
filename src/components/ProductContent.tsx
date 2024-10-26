"use client";
import ArrowLeftRound from "@/assets/SVG/icons/ArrowLeftRound";
import ArrowRightRound from "@/assets/SVG/icons/ArrowRightRound";
import React, { useRef } from "react";
import Image from "next/image";
import useScroll from "@/hook/useScroll";

const ProductContent = ({
  title,
  images,
}: {
  title: string;
  images: string[];
}) => {
  const scrollLeftRef = useRef<HTMLDivElement | null>(null);
  const handleScroll = useScroll(scrollLeftRef);
  return (
    <div className="border-y border-solid border-dark-12 py-[40px] lg:py-[60px] overflow-hidden">
      <div className="flex justify-between items-center w-full mb-5 lg:mb-10">
        <h1 className="text-grey-50 text-[28px] lg:text-[34px] font-semibold uppercase ">
          {title}
        </h1>
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
    </div>
  );
};

export default ProductContent;
