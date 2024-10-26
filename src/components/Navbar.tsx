"use client";
import Hambuger from "@/assets/SVG/Hambuger";
import Times from "@/assets/SVG/icons/Times";
import WacLogo from "@/assets/SVG/WacLogo";
import useOnClickOutside from "@/hook/useOnClickOutside";
import useStore from "@/store";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import React, { useRef, useState } from "react";

const Navbar = () => {
  const currentRoute = usePathname();
  const router = useRouter();
  const ref = useRef(null);
  const active = useStore((state) => state.openHamburger);
  const setActive = useStore((state) => state.setOpenHamburger);

  const handleClickOutside = () => {
    console.log("clicked inside");
    setActive(false);
  };

  useOnClickOutside(ref, handleClickOutside);

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
          <div
            className={`px-[30px] py-6 border-l border-solid border-x-dark-12 ${
              currentRoute === "/feeds"
                ? "text-white bg-dark-8"
                : "text-grey-70"
            }`}
          >
            <Link className="text-sm font-medium" href="/feeds">
              Feeds
            </Link>
          </div>
        </div>
        <div className="text-white py-5 hidden lg:block">
          <button
            onClick={() => router.push("/contact-us")}
            className="relative w-[115px] h-[49px] bg-dark-12 rounded-lg border overflow-hidden border-solid border-dark-20 text-sm font-medium transition-all duration-600 ease-out before:absolute before:inset-0 before:bg-yellow-55 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 before:text-white hover:before:scale-x-100 before:z-0 before:rounded-lg before:overflow-hidden"
          >
            <p className="relative z-10">Contact Us</p>
          </button>
        </div>
        <div
          onClick={() => setActive(!active)}
          className="block border rounded-tl-[20px] border-solid border-dark-12 p-5 mt-10 lg:hidden relative z-40 transition-all"
        >
          {active ? <Hambuger /> : <Times />}

          <div
            className={`p-4 rounded-md absolute right-0 top-16 bg-white flex flex-col space-y-2 w-[200px] ${
              active ? "hidden" : "block"
            }`}
          >
            <Link
              className={`text-sm font-medium border-b border-solid border-dark-12 pb-2 ${
                currentRoute === "/" ? "text-purple-55 font-bold" : ""
              }`}
              href="/"
            >
              Home
            </Link>
            <Link
              className={`text-sm font-medium border-b border-solid border-dark-12 pb-2 ${
                currentRoute === "/about-us" ? "text-purple-55 font-bold" : ""
              }`}
              href="/about-us"
            >
              About Us
            </Link>
            <Link
              className={`text-sm font-medium border-b border-solid border-dark-12 pb-2 ${
                currentRoute === "/services" ? "text-purple-55 font-bold" : ""
              }`}
              href="/services"
            >
              Services
            </Link>
            <Link
              className={`text-sm font-medium border-b border-solid border-dark-12 pb-2 ${
                currentRoute === "/projects" ? "text-purple-55 font-bold" : ""
              }`}
              href="/projects"
            >
              Projects
            </Link>
            <Link
              className={`text-sm font-medium border-b border-solid border-dark-12 pb-2 ${
                currentRoute === "/feeds" ? "text-purple-55 font-bold" : ""
              }`}
              href="/feeds"
            >
              Feeds
            </Link>
            <Link
              className={`text-sm font-medium ${
                currentRoute === "/contact-us" ? "text-purple-55 font-bold" : ""
              }`}
              href="/contact-us"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
