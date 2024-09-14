"use client";

import ArrowBox from "@/assets/SVG/ArrowBox";
import ArrowLeftRound from "@/assets/SVG/icons/ArrowLeftRound";
import ArrowRightRound from "@/assets/SVG/icons/ArrowRightRound";
import BulletStar from "@/assets/SVG/icons/BulletStar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const ServicesBox = () => {
  const router = useRouter();

  const data = [
    "BRand strategy development",
    "logo & visual identity",
    "packaging design",
    "marketing collateral design",
    "digital marketing",
  ];
  return (
    <div className="w-full mt-[80px] lg:mt-[150px] px-[16px] lg:px-[80px]">
      {" "}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <div>
          <h3 className="text-grey-50 text-sm lg:text-base font-semibold uppercase">
            our Services
          </h3>
          <h2 className="text-white text-[28px] lg:text-[48px] font-semibold uppercase">
            wac company services
          </h2>
        </div>
        <div className="my-5 lg:my-0 flex items-center lg:space-x-5">
          {/* <div className="hidden lg:flex items-center space-x-3 border border-solid border-dark-12 rounded-[100px] p-2">
            <ArrowLeftRound />
            <ArrowRightRound />
          </div> */}
          <button
            onClick={() => router.push("/services")}
            className="relative overflow-hidden w-[166px] h-[49px] bg-dark-12 rounded-lg border border-solid border-dark-20 text-sm font-medium text-white transition-all duration-600 ease-out before:absolute before:inset-0 before:bg-yellow-55 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 before:text-white hover:before:scale-x-100 before:z-0 before:rounded-lg before:overflow-hidden"
          >
            <p className="relative z-10">View All Services {"->"}</p>
          </button>
        </div>
      </div>
      <div className="border-b border-solid border-dark-12 lg:mt-7" />
      <div className="mt-[40px] lg:mt-[60px] flex flex-col-reverse lg:justify-between lg:space-y-0 lg:flex-row lg:space-x-10">
        <div className="flex-1 mt-[30px] lg:mt-0">
          <h2 className="text-[28px] lg:text-[34px] font-semibold uppercase text-grey-50 flex items-center gap-[10px]">
            branding & Design
            <span
              onClick={() => router.push("/services")}
              className="cursor-pointer hidden lg:block"
            >
              <ArrowBox width="104px" height="56px" />
            </span>
            <span
              onClick={() => router.push("/services")}
              className="cursor-pointer block lg:hidden"
            >
              <ArrowBox width="80px" height="48px" />
            </span>
          </h2>
          <p className="text-grey-50 text-sm lg:text-base mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sapien nibh, ullamcorper et sem eget, pretium aliquet
            risus. Nunc sed tortor lobortis, placerat purus vel, pellentesque
            mauris. Quisque rutrum, nibh eget aliquam sodales, magna orci
            ultrices neque, nec fermentum metus justo ac tellus. Integer
            consequat lectus sed lorem consequat semper
          </p>
          <div className="mt-[30px] lg:mt-10">
            <h4 className="text-grey-80 font-medium text-sm lg:text-base mb-[10px] lg:mb-4">
              Service Highlights
            </h4>
            <div className="flex flex-col space-y-[10px]">
              {data.map((item) => (
                <div
                  className="py-[14px] px-[14px] lg:py-4 lg:px-[18px] border border-solid border-dark-12 rounded-[10px] flex items-center uppercase text-sm lg:text-base text-grey-70"
                  key={item}
                >
                  <span className="mr-[10]">
                    <BulletStar />
                  </span>{" "}
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 pt-0 lg:pt-8">
          <Image
            src="/images/singer.png"
            width={620}
            height={562}
            quality={100}
            objectFit="cover"
            alt="singer"
          />
        </div>
      </div>
      {/* <div className="lg:hidden flex justify-center items-center mt-10 space-x-3 border border-solid border-dark-12 rounded-[100px] p-2 w-fit m-auto">
        <ArrowLeftRound />
        <ArrowRightRound />
      </div> */}
    </div>
  );
};

export default ServicesBox;
