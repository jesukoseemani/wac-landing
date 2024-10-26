import ArrowBox from "@/assets/SVG/ArrowBox";
import FacebookRounded from "@/assets/SVG/icons/FacebookRounded";
import LinkedInRounded from "@/assets/SVG/icons/LinkedInRounded";
import TwitterRounded from "@/assets/SVG/icons/TwitterRounded";
import Link from "next/link";
import React from "react";
import InputCN from "./formUi/InputCN";
import DesiredTextArea from "./formUi/DesiredTextArea";
import Checkboxes from "./formUi/Checkboxes";

const FormRequest = () => {
  const checks = ["Email", "Video call", "Mobile number"];
  return (
    <div className="text-white">
      <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        <InputCN type="normal" title="First Name" name="firstName" />
        <InputCN type="normal" title="Last Name" name="LastName" />
        <InputCN type="normal" title="Email Address" name="email" />
        <InputCN type="normal" title="Phone Number" name="phone" />
        <InputCN
          className="md:!col-span-2"
          type="normal"
          title="Location"
          name="location"
        />
        <DesiredTextArea className="md:!col-span-2" title="Project details" />
        <Checkboxes checkArray={checks} />
      </div>
      <div className="flex justify-between items-center w-full">
        <button className="text-[28px] lg:text-[38px] font-semibold uppercase items-end text-white flex gap-[10px]">
          <p className="bg-clip-text text-white hover:text-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500">
            Send Message
          </p>
          <span className="cursor-pointer hidden lg:block">
            <ArrowBox width="104px" height="50px" />
          </span>
        </button>
        <div className="w-fit flex items-center space-x-[10px] border border-solid border-dark-12 rounded-[100px] p-2">
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
    </div>
  );
};

export default FormRequest;
