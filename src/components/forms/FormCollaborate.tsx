import ArrowBox from "@/assets/SVG/ArrowBox";
import FacebookRounded from "@/assets/SVG/icons/FacebookRounded";
import LinkedInRounded from "@/assets/SVG/icons/LinkedInRounded";
import TwitterRounded from "@/assets/SVG/icons/TwitterRounded";
import Link from "next/link";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const FormCollaborate = () => {
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
      FormCollaborate
      <div className="flex justify-between items-center w-full">
        <button className="text-[28px] lg:text-[38px] font-semibold uppercase items-end text-white flex gap-[10px]">
          Send Message
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
