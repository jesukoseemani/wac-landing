import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import ArrowUp from "@/assets/SVG/icons/ArrowUp";
import ArrowDown from "@/assets/SVG/icons/ArrowDown";

const Faq = ({ classNameProps }: { classNameProps?: string }) => {
  const faqs = [
    {
      question: "What type of photography do you specialize in?",
      answer:
        "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.",
    },
    {
      question: "How can I book a photography session with you?",
      answer:
        "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.",
    },
    {
      question: "What equipment do you use for your photography?",
      answer:
        "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.",
    },
    {
      question: "Can I request a specific location for a ",
      answer:
        "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.",
    },
    {
      question: "What is your editing process like?",
      answer:
        "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.",
    },
    {
      question: "Are digital files included in your photography packages?",
      answer:
        "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.",
    },
    {
      question: "Do you offer prints of your photographs?",
      answer:
        "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.",
    },
    {
      question:
        "How long does it take to receive the edited photos after a session?",
      answer:
        "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.",
    },
  ];
  return (
    <div
      className={`w-full px-[16px] lg:px-[80px] ${
        classNameProps ?? "mt-[80px] lg:mt-[150px]"
      }`}
    >
      <h3 className="text-grey-50 text-sm lg:text-base font-semibold uppercase">
        FAQ’s
      </h3>
      <h2 className="text-white text-[28px] lg:text-[48px] font-semibold uppercase">
        Frequently Asked Questions
      </h2>
      <div className="border-b border-solid border-dark-12 my-5 lg:my-0 lg:mt-7" />
      <div className="flex flex-col lg:flex-row lg:mt-[30px]">
        <div className="flex-1">
          <dl className="divide-y divide-dark-12">
            {faqs.slice(0, 4).map((faq) => (
              <Disclosure
                key={faq.question}
                as="div"
                className="py-6 px-6 lg:px-10 my-2"
              >
                <dt>
                  <DisclosureButton className="group w-full flex items-center justify-between text-left text-grey-70">
                    <span className="text-[18px] font-semibold leading-7 uppercase">
                      {faq.question}
                    </span>
                    <span className="flex">
                      <div className="p-[10px] border border-solid cursor-pointer border-dark-12 rounded-full group-data-[open]:hidden">
                        <ArrowUp />
                      </div>
                      <div className="p-[10px] border border-solid cursor-pointer border-dark-12 rounded-full [.group:not([data-open])_&]:hidden">
                        <ArrowDown />
                      </div>
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd">
                  <p className="text-base leading-7 text-grey-50">
                    {faq.answer}
                  </p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
        <div className="border-x border-solid border-dark-12" />
        <div className="flex-1">
          <dl className="divide-y divide-dark-12">
            {faqs.slice(4, 8).map((faq) => (
              <Disclosure
                key={faq.question}
                as="div"
                className="py-6 px-6 lg:px-10 my-2"
              >
                <dt>
                  <DisclosureButton className="w-full group flex items-center justify-between text-left text-grey-70">
                    <span className="text-[18px] font-semibold leading-7 uppercase">
                      {faq.question}
                    </span>
                    <span className="flex">
                      <div className="p-[10px] border border-solid cursor-pointer border-dark-12 rounded-full group-data-[open]:hidden">
                        <ArrowUp />
                      </div>
                      <div className="p-[10px] border border-solid cursor-pointer border-dark-12 rounded-full [.group:not([data-open])_&]:hidden">
                        <ArrowDown />
                      </div>
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="">
                  <p className="text-base leading-7 text-grey-50">
                    {faq.answer}
                  </p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Faq;
