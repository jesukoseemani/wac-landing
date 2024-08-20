"use client";
import Hambuger from "@/assets/SVG/Hambuger";
import WacLogo from "@/assets/SVG/WacLogo";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

const Navbar = () => {
  const currentRoute = usePathname();
  return (
    <div className="w-full px-4 lg:px-[62px]">
      <div className="w-full lg:px-[18px] flex justify-between border-x border-solid border-x-dark-12">
        <div className="pl-4 pt-10 flex items-center justify-center lg:py-5 lg:pl-0">
          <WacLogo />
        </div>
        <div className="hidden border border-solid border-dark-12 rounded-t-[10px] mt-5 text-grey-70 lg:flex items-center">
          <div
            className={`px-[40px] py-6 ${
              currentRoute === "/" ? "text-white bg-dark-8" : "text-grey-70"
            }`}
          >
            <Link className="text-sm font-medium" href="/">
              Home
            </Link>
          </div>
          <div
            className={`px-[30px] py-6 border-l border-solid border-x-dark-12 ${
              currentRoute === "/about-us"
                ? "text-white bg-dark-8"
                : "text-grey-70"
            }`}
          >
            <Link className="text-sm font-medium" href="/about-us">
              About Us
            </Link>
          </div>
          <div
            className={`px-[30px] py-6 border-l border-solid border-x-dark-12 ${
              currentRoute === "/services"
                ? "text-white bg-dark-8"
                : "text-grey-70"
            }`}
          >
            <Link className="text-sm font-medium" href="/services">
              Services
            </Link>
          </div>
          <div
            className={`px-[30px] py-6 border-l border-solid border-x-dark-12 ${
              currentRoute === "/projects"
                ? "text-white bg-dark-8"
                : "text-grey-70"
            }`}
          >
            <Link className="text-sm font-medium" href="/projects">
              Projects
            </Link>
          </div>
        </div>
        <div className="text-white py-5 hidden lg:block">
          <button className="w-[115px] h-[49px] bg-dark-12 rounded-lg border border-solid border-dark-20 text-sm font-medium">
            Contact Us
          </button>
        </div>
        <div className="block border rounded-tl-[20px] border-solid border-dark-12 p-5 mt-10 lg:hidden">
          <Hambuger />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
