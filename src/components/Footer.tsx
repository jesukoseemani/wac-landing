"use client";

import ArrowBox from "@/assets/SVG/ArrowBox";
import Abstract from "@/assets/SVG/icons/Abstract";
import FacebookRounded from "@/assets/SVG/icons/FacebookRounded";
import LinkedInRounded from "@/assets/SVG/icons/LinkedInRounded";
import TwitterRounded from "@/assets/SVG/icons/TwitterRounded";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Footer = () => {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <div className="w-[80px] hidden lg:flex justify-center items-center">
          <Abstract />
        </div>
        <div className="py-[40px] lg:py-[80px] px-[20px] lg:px-[60px] border border-solid border-dark-12">
          <h3 className="text-grey-50 text-sm lg:text-base font-semibold uppercase mb-[50px]">
            get the visibility you need
          </h3>
          <div>
            <h2 className="text-[28px] lg:text-[48px] font-semibold uppercase text-white flex items-center gap-[10px]">
              Let’s{" "}
              <span
                onClick={() => router.push("/contact-us?type=collaborate")}
                className="cursor-pointer hidden lg:block"
              >
                <ArrowBox />
              </span>
              <span
                onClick={() => router.push("/contact-us?type=collaborate")}
                className="cursor-pointer block lg:hidden"
              >
                <ArrowBox width="80px" height="48px" />
              </span>
            </h2>
            <h2 className="text-[28px] lg:text-[48px] font-semibold uppercase text-white">
              Work Together
            </h2>
          </div>
        </div>
        <div className="flex-1 flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:justify-between py-[40px] lg:pt-[80px] px-[20px] lg:px-[50px]">
          <div>
            <h3
              onClick={() => router.push("/")}
              className="text-grey-50 text-sm font-medium mb-4 cursor-pointer"
            >
              HOME
            </h3>
            <ul className="list-none text-grey-95 text-sm font-medium space-y-4 cursor-pointer">
              <li>
                <Link href="/about-us">ABOUT</Link>
              </li>
              <li>
                <Link href="/services">SERVICES</Link>
              </li>
              <li>
                <Link href="/prijects">PROJECTS</Link>
              </li>
              <li>
                <Link href="/contact-us">CONTACT US</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-grey-50 text-sm font-medium mb-4 cursor-pointer">
              PROJECTS
            </h3>
            <ul className="list-none text-grey-95 text-sm font-medium space-y-4 cursor-pointer">
              <li>PROJECT 1</li>
              <li>PROJECT 2</li>
              <li>PROJECT 3</li>
              <li>PROJECT 4</li>
            </ul>
          </div>
          <div>
            <h3 className="text-grey-50 text-sm font-medium mb-4 cursor-pointer">
              SERVICES
            </h3>
            <ul className="list-none uppercase text-grey-95 text-sm font-medium space-y-4 cursor-pointer">
              <li>
                <Link href="">Brand Strategy Development</Link>
              </li>
              <li>logo visual identity</li>
              <li>Packaging Design </li>
              <li>Marketing collateral design</li>
            </ul>
          </div>
        </div>
        <div className="w-[80px] hidden lg:flex justify-center items-center">
          <Abstract />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center py-[20px] lg:py-[34px] px-[16px] lg:px-[80px]">
        <div className="flex space-x-2">
          <li className="text-grey-50 text-sm list-none">Terms & Conditions</li>
          <li className="text-grey-50 text-sm list-none">Privacy Policy</li>
        </div>
        <div className="hidden w-fit lg:flex items-center space-x-[10px] border border-solid border-dark-12 rounded-[100px] p-2">
          <Link
            href="https://www.facebook.com/wacpeople"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookRounded />
          </Link>
          <Link
            href="https://www.twitter.com/wacpeople"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterRounded />
          </Link>
          <Link
            href="https://www.linkedin.com/company/wacpeople"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInRounded />
          </Link>
        </div>
        <div className="py-5 lg:py-0">
          <p className="text-grey-50 text-sm">
            © 2024 Wac Company. All rights reserved.
          </p>
        </div>
        <div className="w-fit flex lg:hidden items-center space-x-[10px] border border-solid border-dark-12 rounded-[100px] p-2">
          <Link
            href="https://www.facebook.com/wacpeople"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookRounded />
          </Link>
          <Link
            href="https://www.twitter.com/wacpeople"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterRounded />
          </Link>
          <Link
            href="https://www.linkedin.com/company/wacpeople"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInRounded />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
