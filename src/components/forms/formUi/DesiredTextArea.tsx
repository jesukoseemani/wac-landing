"use client";

import { useState } from "react";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import {
  CalendarIcon,
  PaperClipIcon,
  TagIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";

interface props {
  className: string;
  title: string;
}

const assignees = [
  { name: "Tech people", value: "Tech" },
  {
    name: "Art people",
    value: "Art",
  },
];
const labels = [
  { name: "film making", value: "film-making" },
  { name: "event planning", value: "event-planning" },
  { name: "content creation", value: "content-creation" },
  { name: "acting", value: "acting" },
];
const dueDates = [
  { name: "No due date", value: "Not-stated" },
  { name: "Tomorrow", value: "tomorrow" },
  { name: "A week", value: "week" },
  { name: "A month", value: "month" },
  { name: "custom", value: "custom" },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

interface propsName {
  name: string;
  value: string;
}
[];

const DesiredTextArea = ({ className, title }: props) => {
  const [assigned, setAssigned] = useState<propsName | null>(null);
  const [labelled, setLabelled] = useState<propsName | null>(null);
  const [dated, setDated] = useState<propsName | null>(null);

  return (
    <div className={`${className} relative`}>
      <div className="overflow-hidden rounded-lg border border-gray-300 shadow-sm focus-within:border-purple-55 focus-within:ring-1 focus-within:ring-purple-55">
        <label htmlFor="description" className="sr-only">
          {title}
        </label>
        <textarea
          id="description"
          name="description"
          rows={5}
          placeholder={title}
          className="block w-full resize-none border-0 !bg-dark-3 py-2 text-[#E4E4E6] placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          defaultValue={""}
        />

        <div aria-hidden="true">
          <div className="py-2">
            <div className="h-9" />
          </div>
          <div className="h-px" />
          <div className="py-2">
            <div className="py-px">
              <div className="h-9" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-px bottom-0">
        <div className="flex flex-nowrap justify-end space-x-2 px-2 py-2 sm:px-3">
          <Listbox
            as="div"
            value={assigned}
            onChange={setAssigned}
            className="flex-shrink-0"
          >
            <Label className="sr-only">Audience</Label>
            <div className="relative">
              <ListboxButton className="relative inline-flex items-center whitespace-nowrap rounded-full bg-gray-50 px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-200 sm:px-3">
                <UserCircleIcon
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 sm:-ml-1"
                />

                <span
                  className={classNames(
                    !assigned ? "text-gray-800" : "text-gray-900",
                    "hidden truncate sm:ml-2 sm:block"
                  )}
                >
                  {!assigned ? "Audience" : assigned?.name}
                </span>
              </ListboxButton>

              <ListboxOptions
                transition
                className="absolute right-0 z-10 mt-1 max-h-56 w-52 overflow-auto rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm "
              >
                {assignees?.map((assignee) => (
                  <ListboxOption
                    key={assignee.value}
                    value={assignee}
                    className="relative select-none bg-white px-3 py-2 data-[focus]:bg-gray-100 cursor-pointer"
                  >
                    <div className="flex items-center">
                      <UserCircleIcon
                        aria-hidden="true"
                        className="h-5 w-5 flex-shrink-0 text-gray-400"
                      />

                      <span className="ml-3 block truncate font-medium text-black">
                        {assignee.name}
                      </span>
                    </div>
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </div>
          </Listbox>

          <Listbox
            as="div"
            value={labelled}
            onChange={setLabelled}
            className="flex-shrink-0"
          >
            <Label className="sr-only">Services</Label>
            <div className="relative">
              <ListboxButton className="relative inline-flex items-center whitespace-nowrap rounded-full bg-gray-50 px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-200 sm:px-3">
                <TagIcon
                  aria-hidden="true"
                  className={classNames(
                    !labelled ? "text-gray-800" : "text-gray-500",
                    "h-5 w-5 flex-shrink-0 sm:-ml-1"
                  )}
                />
                <span
                  className={classNames(
                    !labelled ? "text-black" : "text-gray-900",
                    "hidden truncate sm:ml-2 sm:block"
                  )}
                >
                  {!labelled ? "Services" : labelled.name}
                </span>
              </ListboxButton>

              <ListboxOptions
                transition
                className="absolute right-0 z-10 mt-1 max-h-56 w-52 overflow-auto rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
              >
                {labels.map((label) => (
                  <ListboxOption
                    key={label.value}
                    value={label}
                    className="relative cursor-pointer select-none bg-white px-3 py-2 data-[focus]:bg-gray-100"
                  >
                    <div className="flex items-center">
                      <span className="block truncate font-medium text-black">
                        {label.name}
                      </span>
                    </div>
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </div>
          </Listbox>

          <Listbox
            as="div"
            value={dated}
            onChange={setDated}
            className="flex-shrink-0"
          >
            <Label className="sr-only">Timeline</Label>
            <div className="relative">
              <ListboxButton className="relative inline-flex items-center whitespace-nowrap rounded-full bg-gray-50 px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-200 sm:px-3">
                <CalendarIcon
                  aria-hidden="true"
                  className={classNames(
                    !dated ? "text-gray-800" : "text-gray-500",
                    "h-5 w-5 flex-shrink-0 sm:-ml-1"
                  )}
                />
                <span
                  className={classNames(
                    !dated ? "text-black" : "text-gray-900",
                    "hidden truncate sm:ml-2 sm:block"
                  )}
                >
                  {!dated ? "Due date" : dated.name}
                </span>
              </ListboxButton>

              <ListboxOptions
                transition
                className="absolute right-0 z-10 mt-1 max-h-56 w-52 overflow-auto rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
              >
                {dueDates.map((dueDate) => (
                  <ListboxOption
                    key={dueDate.value}
                    value={dueDate}
                    className="relative cursor-pointer select-none bg-white px-3 py-2 data-[focus]:bg-gray-100"
                  >
                    <div className="flex items-center">
                      <span className="block truncate font-medium text-black">
                        {dueDate.name}
                      </span>
                    </div>
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </div>
          </Listbox>
        </div>
        <div className="flex items-center justify-between space-x-3 border-t border-gray-200 px-2 py-4 sm:px-3">
          <div className="flex">
            <button
              type="button"
              className="group -my-2 -ml-2 inline-flex items-center rounded-full px-3 py-2 text-left text-gray-400 relative cursor-pointer"
            >
              <label htmlFor="file-upload" className="flex cursor-pointer">
                <PaperClipIcon
                  aria-hidden="true"
                  className="-ml-1 mr-2 h-5 w-5 group-hover:text-gray-500"
                />
                <span className="text-sm italic text-gray-300 group-hover:text-gray-600">
                  Attach a file
                </span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                />
              </label>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesiredTextArea;
