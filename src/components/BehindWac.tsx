"use client";
import FluidDownBg from "@/assets/SVG/icons/FluidDownBg";
import FluidUpBg from "@/assets/SVG/icons/FluidUpBg";
import ObjectiveDown from "@/assets/SVG/icons/ObjectiveDown";
import ObjectiveUp from "@/assets/SVG/icons/ObjectiveUp";
import Star from "@/assets/SVG/Star";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const BehindWac = () => {
  const router = useRouter();
  const people = [
    {
      id: 1,
      name: "Fawole Peters",
      designation: "CEO/Founder",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Yemi Animashaun",
      designation: "Head of Wac Studios",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Aisosa Agbotean",
      designation: "Head of WacParty",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Damilola Bolashodun",
      designation: "Head of Public Relations",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      name: "Kosemani Olowosusi",
      designation: "CTO",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },

    {
      id: 6,
      name: "Fawole Mary",
      designation: "Head of People's Dept.",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
    {
      id: 7,
      name: "Fidelis Kor",
      designation: "Operations/Com. Manager",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
  ];
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
      <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 justify-between">
        <div>
          <h3 className="text-grey-50 text-sm lg:text-base font-semibold uppercase">
            behind wac company
          </h3>
          <h2 className="text-white text-[28px] lg:text-[48px] font-semibold uppercase">
            Wac people
          </h2>
        </div>
        <div className="flex cursor-pointer mr-10">
          <AnimatedTooltip items={people} />
        </div>
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
