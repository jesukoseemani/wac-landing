import ArrowBox from "@/assets/SVG/ArrowBox";
import FacebookRounded from "@/assets/SVG/icons/FacebookRounded";
import LinkedInRounded from "@/assets/SVG/icons/LinkedInRounded";
import TwitterRounded from "@/assets/SVG/icons/TwitterRounded";
import Link from "next/link";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import InputCN from "./formUi/InputCN";
import DesiredTextArea from "./formUi/DesiredTextArea";

const FormCollaborate = () => {
  const levelArray = [
    { name: "Joint projects", value: "joint-projects" },
    { name: "Workshops", value: "workshops" },
    { name: "Events", value: "events" },
    { name: "Content creation", value: "Content-creation" },
    { name: "others", value: "others" },
  ];
  const validationSchema = z.object({
    firstName: z.string().min(2, { message: "Required" }),
    lastName: z.string().min(2, { message: "Required" }),
    email: z.string().email({ message: "Invalid email" }),
    phoneNumber: z.string().min(5, { message: "Required" }),
    company: z.string().min(1).optional(),
    collaborationType: z.string({
      message: "Required",
    }),
    location: z.string({
      message: "Required",
    }),
    residence: z
      .array(
        z.object(
          { value: z.string(), label: z.string() },
          {
            message: "Select one",
          }
        ),
        {
          message: "Required",
        }
      )
      .optional(),
    gender: z.string({
      message: "Required",
    }),
    choice: z.string({
      message: "Required",
    }),
    agreement: z.boolean(),
  });
  return (
    <div className="text-white">
      <div className="mb-6 grid grid-cols-2 gap-10">
        <InputCN type="normal" title="First Name" name="firstName" />
        <InputCN type="normal" title="Last Name" name="LastName" />
        <InputCN type="normal" title="Email Address" name="email" />
        <InputCN type="normal" title="Phone Number" name="phone" />
        <InputCN
          type="normal"
          title="Company’s name (Optional)"
          name="organization"
        />
        <InputCN type="normal" title="Location" name="location" />
        <InputCN
          type="select"
          title="Type of collaboration"
          name="type-collaboration"
          optionValue={levelArray}
        />
        <InputCN type="url" title="Compulsory Social Handle" name="socials" />
        <DesiredTextArea className="!col-span-2" title="Project details" />
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

export default FormCollaborate;
