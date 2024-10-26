import React, { useRef } from "react";

import { CalendarIcon } from "@heroicons/react/20/solid";

interface props {
  name: string;
  title: string;
  error?: string;
  type: "normal" | "select" | "date" | "url" | "area";
  optionValue?: { name: string; value: string }[];
  className?: string;
}

// N/B: FOR FAST DEVELOPMENT, SEPERATE EACH RELATABLE COMPONENT

const InputCN = ({
  type,
  title,
  name,
  error,
  optionValue,
  className,
}: props) => {
  const dateInputRef = useRef<HTMLInputElement>(null);

  const openDatePicker = () => {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker();
    }
  };
  const Normal = () => {
    return (
      <div className={`${className}`}>
        <label
          htmlFor={name}
          className="block text-sm font-medium leading-6 text-[#E4E4E6]"
        >
          {title}
        </label>
        <div className="relative mt-2">
          <input
            id={name}
            name={name}
            type="text"
            placeholder={title.toLowerCase()}
            className="peer block w-full !bg-dark-3 text-[#E4E4E6] border-0 py-1.5 focus:ring-0 sm:text-sm sm:leading-6"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-purple-55"
          />
        </div>
        <p className="text-red-700 text-sm">{error}</p>
      </div>
    );
  };

  const Select = () => {
    return (
      <div>
        <label
          htmlFor={name}
          className="block text-sm font-medium leading-6 text-[#E4E4E6]"
        >
          {title}
        </label>
        <select
          id={name}
          name={name}
          className="mt-2 block w-full bg-dark-3 rounded-md border-0 py-2 pl-3 pr-10 text-[#E4E4E6] ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-purple-55 sm:text-sm sm:leading-6"
          defaultValue={optionValue ? optionValue[0].value : ""}
        >
          {optionValue?.map((item, i) => (
            <option key={i} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    );
  };

  const DateInput = () => {
    return (
      <div className={`${className}`}>
        <label
          htmlFor={name}
          className="block text-sm font-medium leading-6 text-[#E4E4E6]"
        >
          {title}
        </label>
        <div className="relative mt-2">
          <input
            id={name}
            name={name}
            type="date"
            ref={dateInputRef}
            className="peer block appearance-none bg-dark-3 w-full text-[#E4E4E6] border-0 py-1.5 focus:ring-0 sm:text-sm sm:leading-6"
          />
          <span
            className="peer absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer"
            onClick={openDatePicker}
          >
            <CalendarIcon aria-hidden="true" className="h-5 w-5" />
          </span>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-purple-55"
          />
        </div>
        <p className="text-red-700 text-sm">{error}</p>
      </div>
    );
  };

  const Url = () => {
    return (
      <div>
        <label
          htmlFor={name}
          className="block text-sm font-medium leading-6 text-[#E4E4E6]"
        >
          {title}
        </label>
        <div className="mt-2">
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-yellow-55 sm:max-w-md">
            <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
              http://
            </span>
            <input
              id={name}
              name={name}
              type="text"
              placeholder="www.example.com"
              className="peer block flex-1 border-0 bg-transparent py-2 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-purple-55"
          />
        </div>
      </div>
    );
  };

  const TextArea = () => {
    return (
      <div className={`${className}`}>
        <label
          htmlFor="comment"
          className="block text-sm font-medium leading-6 text-[#E4E4E6]"
        >
          {title}
        </label>
        <div className="mt-2">
          <textarea
            id={name}
            name={name}
            rows={4}
            className="block w-full bg-dark-3 rounded-md border-0 py-1.5 text-[#E4E4E6] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-55 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    );
  };

  const renderInput: Record<
    "normal" | "select" | "date" | "url" | "area",
    JSX.Element
  > = {
    normal: <Normal />,
    select: <Select />,
    date: <DateInput />,
    url: <Url />,
    area: <TextArea />,
  };
  return <>{renderInput[type]}</>;
};

export default InputCN;
