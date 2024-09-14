"use client";
import FluidDownBg from "@/assets/SVG/icons/FluidDownBg";
import FluidUpBg from "@/assets/SVG/icons/FluidUpBg";
import ObjectiveDown from "@/assets/SVG/icons/ObjectiveDown";
import ObjectiveUp from "@/assets/SVG/icons/ObjectiveUp";
import Star from "@/assets/SVG/Star";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const BehindWac = () => {
  const router = useRouter();
  const data = [
    {
      name: "Our vision",
      desc: "Lorem ipsum dolor sit amet consectetur. Suspendisse morbi vel et eleifend aenean. Iaculis dolor mattis sapien sit placerat risus porttitor phasellus. Vel et duis tincidunt diam feugiat lorem sed eu. Imperdiet vitae adipiscing tempus tellus ligula leo.",
    },
    {
      name: "our mission",
      desc: "Lorem ipsum dolor sit amet consectetur. Eget viverra quis mi proin. Scelerisque aenean erat morbi duis ridiculus blandit integer dui. Tempor ultricies elementum bibendum auctor. Vitae odio tempor diam imperdiet nunc vestibulum vitae aliquet.",
    },
  ];
  return (
    <div className="w-full mt-[80px] lg:mt-[83px] px-[16px] lg:px-[80px]">
      <div className="flex justify-between">
        <div>
          <h3 className="text-grey-50 text-sm lg:text-base font-semibold uppercase">
            behind wac company
          </h3>
          <h2 className="text-white text-[28px] lg:text-[48px] font-semibold uppercase">
            Wac people
          </h2>
        </div>
        <div className="text-white">hhe</div>
      </div>

      <div className="border-b border-solid border-dark-12 mt-[20px] lg:mt-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-[60px]">
        {data.map((item, index) => (
          <div
            className="bg-dark-6 rounded-[10px] border border-solid border-dark-12 p-6 lg:p-10 relative overflow-hidden"
            key={index}
          >
            <h2 className="text-grey-50 text-[24px] lg:text-[34px] uppercase mb-[14px]">
              {item.name}
            </h2>
            <p className="text-grey-50 text-sm lg:text-base z-40">
              {item.desc}
            </p>
            <div className="absolute top-[-15px] right-[-100px] lg:top-0 lg:right-0 z-[-100px] mix-blend-screen">
              <ObjectiveDown />
            </div>
            <div className="absolute bottom-[-15px] left-[-100px] lg:bottom-0 lg:left-0 z-[-100px] mix-blend-screen">
              <ObjectiveUp />
            </div>
          </div>
        ))}
      </div>

      <div className="p-5 lg:p-10 rounded-[10px] bg-[#111113] flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-5 lg:items-center mt-[80px] lg:mt-[100px]">
        <div className="flex-1">
          <Image
            src="/images/boyOnTable.png"
            width={590}
            height={461}
            quality={100}
            objectFit="cover"
            alt="boys"
          />
        </div>
        <div className="p-[30px] flex-1 border border-solid border-dark-12 rounded-[20px]">
          <h2 className="flex items-center text-[24px] font-semibold text-grey-80">
            <span className="mr-[6px]">
              <Star />
            </span>{" "}
            Join Wac People
          </h2>
          <p className="text-sm lg:text-base text-grey-70 my-4">
            WacCompany serves as the overarching entity that encompasses all the
            subsidiary brands under its umbrella. It provides strategic
            direction, resources, and support to each of these brands while
            maintaining a cohesive vision and identity.
          </p>
          <p className="text-sm lg:text-base text-grey-70 my-4">
            As a marketing agency, WacCompany is dedicated to maximizing both
            impression and conversion for its clients. It leverages creativity,
            innovation, and strategic thinking to deliver impactful marketing
            solutions that drive results.
          </p>
          <button
            onClick={() => router.push("/contact-us?type=talent")}
            className="w-[174px] h-[49px] rounded-lg text-white text-sm font-medium bg-[#CA8A04] flex justify-center items-center"
          >
            Join Wac People
          </button>
        </div>
      </div>
    </div>
  );
};

export default BehindWac;
