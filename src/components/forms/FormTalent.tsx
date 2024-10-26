import ArrowBox from "@/assets/SVG/ArrowBox";
import FacebookRounded from "@/assets/SVG/icons/FacebookRounded";
import LinkedInRounded from "@/assets/SVG/icons/LinkedInRounded";
import TwitterRounded from "@/assets/SVG/icons/TwitterRounded";
import Link from "next/link";
import React from "react";
import InputCN from "./formUi/InputCN";

const FormTalent = () => {
  const levelArray = [
    { name: "Beginner", value: "Beginner" },
    { name: "Intermediate", value: "intermediate" },
    { name: "Advanced", value: "advanced" },
    { name: "Professional", value: "professional" },
  ];

  const refArray = [
    { name: "Social media", value: "social" },
    { name: "flier", value: "flier" },
    { name: "A friend", value: "friend" },
    { name: "A friend", value: "friend" },
    { name: "Other", value: "other" },
  ];
  return (
    <div className="text-white">
      <div className="mb-6 grid grid-cols-2 gap-10">
        <InputCN type="normal" title="First Name" name="firstName" />
        <InputCN type="normal" title="Last Name" name="LastName" />
        <InputCN type="normal" title="Email Address" name="email" />
        <InputCN type="normal" title="Phone Number" name="phone" />
        <InputCN type="date" title="Date of birth" name="dob" />
        <InputCN type="normal" title="Creative discipline" name="discipline" />

        <InputCN
          type="select"
          title="Experience Level"
          name="level"
          optionValue={levelArray}
        />
        <InputCN type="url" title="Compulsory Social Handle" name="socials" />
        <InputCN type="normal" title="Location" name="location" />
        <InputCN
          type="select"
          title="How did you hear about us?"
          name="referral"
          optionValue={refArray}
        />
        <InputCN
          className="!col-span-2"
          type="area"
          title="Why do you want to join Wac People?"
          name="why-join"
        />
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

export default FormTalent;
