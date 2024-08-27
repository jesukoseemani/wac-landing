import Star from "@/assets/SVG/Star";
import FacebookRounded from "@/assets/SVG/icons/FacebookRounded";
import LinkedInRounded from "@/assets/SVG/icons/LinkedInRounded";
import TwitterRounded from "@/assets/SVG/icons/TwitterRounded";
import Image from "next/image";
import React from "react";

const AboutBox = () => {
  return (
    <div className="w-full mt-[80px] lg:mt-[150px] px-[16px] lg:px-[80px]">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <div>
          <h3 className="text-grey-50 text-sm lg:text-base font-semibold uppercase">
            About
          </h3>
          <h2 className="text-white text-[28px] lg:text-[48px] font-semibold uppercase">
            wacCompany
          </h2>
        </div>
        <div className="my-5 lg:my-0">
          <button className="w-[130px] h-[49px] bg-dark-12 rounded-lg border border-solid border-dark-20 text-sm font-medium text-white">
            Know More {"->"}
          </button>
        </div>
      </div>
      <div className="border-b border-solid border-dark-12 lg:mt-7" />
      <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-5 mt-[40px] lg:mt-[60px]">
        <div className="flex-1">
          <Image
            src="/images/boyOnTable.png"
            width={630}
            height={585}
            quality={100}
            objectFit="cover"
            alt="boys"
          />
        </div>
        <div className="border border-solid border-dark-12 rounded-[20px] flex-1">
          <div className="p-[30px]">
            <h2 className="flex items-center text-[24px] font-semibold text-grey-80">
              <span className="mr-[6px]">
                <Star />
              </span>{" "}
              Introduction
            </h2>
            <p className="text-base text-grey-70 mt-4">
              WacCompany serves as the overarching entity that encompasses all
              the subsidiary brands under its umbrella. It provides strategic
              direction, resources, and support to each of these brands while
              maintaining a cohesive vision and identity.
            </p>
            <p className="text-base text-grey-70 mt-4">
              As a marketing agency, WacCompany is dedicated to maximizing both
              impression and conversion for its clients. It leverages
              creativity, innovation, and strategic thinking to deliver
              impactful marketing solutions that drive results.
            </p>
          </div>
          <div className="border-b border-solid border-dark-12" />

          <div className="p-[30px]">
            <h2 className="flex items-center text-[24px] font-semibold text-grey-80">
              <span className="mr-[6px]">
                <Star />
              </span>{" "}
              Contact Information
            </h2>
            <div className="flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:justify-between lg:items-center my-[20px] lg:my-[30px]">
              <div className="flex-1">
                <h2 className="text-base text-grey-90 font-medium">Email</h2>
                <p className="text-lg text-grey-70">waccompany@gmail.com</p>
              </div>
              <div className="flex-1">
                <h2 className="text-base text-grey-90 font-medium">
                  Phone Number
                </h2>
                <p className="text-lg text-grey-70">08000338901</p>
              </div>
            </div>
            <div className="flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:justify-between lg:items-center">
              <div className="w-fit flex items-center space-x-[10px] border border-solid border-dark-12 rounded-[100px] p-2">
                <FacebookRounded />
                <TwitterRounded />
                <LinkedInRounded />
              </div>
              <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4">
                <button className="w-full lg:w-[174px] h-[49px] bg-dark-12 rounded-lg border border-solid border-dark-20 text-sm font-medium text-white">
                  Let’s Work
                </button>
                <button className="w-full lg:w-[174px] h-[49px] bg-dark-12 rounded-lg border border-solid border-dark-20 text-sm font-medium text-white">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
