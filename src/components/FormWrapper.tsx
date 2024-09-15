"use client";
import React from "react";
import FormCollaborate from "./forms/FormCollaborate";
import Collab from "../../public/images/Container.png";
import FormTalent from "./forms/FormTalent";
import FormRequest from "./forms/FormRequest";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
type RequestType = "collaborate" | "talent" | "request";
const FormWrapper = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const method = type ? type : "request";
  const data = {
    collaborate: {
      title: "Collaborate with Us",
      subTitle: "Send Me a Message",
      messageSummary:
        "Have a specific inquiry or message for us? Please use the contact form below, and we'll get back to you promptly.",
      image: Collab,
      formContent: <FormCollaborate />,
    },
    talent: {
      title: "Join Us as Talent",
      subTitle: "Send Me a Message",
      messageSummary:
        "Have a specific inquiry or message for us? Please use the contact form below, and we'll get back to you promptly.",
      image: Collab,
      formContent: <FormTalent />,
    },
    request: {
      title: "Request for a project",
      subTitle: "Send Me a Message",
      messageSummary:
        "Have a specific inquiry or message for us? Please use the contact form below, and we'll get back to you promptly.",
      image: Collab,
      formContent: <FormRequest />,
    },
  };

  const { title, subTitle, messageSummary, image, formContent } =
    data[method as RequestType];

  return (
    <div className="w-full px-[16px] lg:px-[80px] mt-[40px]">
      <h2 className="text-[32px] lg:text-[48px] font-semibold uppercase text-white mb-6">
        {title}
      </h2>
      <div className="w-full h-[342px]">
        <Image src={image} alt="formss" />
      </div>
      <div className="flex flex-col lg:flex-row justify-between space-x-0 lg:space-x-8 space-y-8 lg:space-y-0 mt-10">
        <div className="w-[413px]">
          <h1 className="text-grey-50 text-[28px] lg:text-[34px] font-semibold uppercase ">
            {subTitle}
          </h1>
          <p className="mt-6 text-grey-50 text-sm lg:text-base">
            {messageSummary}
          </p>
        </div>
        <div className="flex-1">{formContent}</div>
      </div>
    </div>
  );
};

export default FormWrapper;
