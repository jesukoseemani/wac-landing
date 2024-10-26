"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useMediaQuery } from "react-responsive";
import reelsData from "./reelsData.json";
import ReelSwipersMobile from "./ReelsSwipersMobile";
import ReelSwipersDesktop from "./ReelsSwipersDesktop";
import { useRouter } from "next/navigation";

export type ReelsProps = {
  images: string;
  name: string;
  timeposted: string;
  active: boolean;
  id: number;
  stories: {
    type: string;
    duration: number;
    url: string;
  }[];
};

const Feeds = () => {
  const [open, setOpen] = useState(true);
  const [openMobile, setOpenMobile] = useState(true);
  const router = useRouter();

  const isMobile = useMediaQuery({
    query: "(max-width: 800px)",
  });
  return (
    <>
      {!isMobile && (
        <Dialog open={open} onClose={() => null} className="relative z-10">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-dark-3 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
          />

          <ReelSwipersDesktop reels={reelsData} />
        </Dialog>
      )}
      {isMobile && (
        <Dialog
          open={openMobile}
          onClose={() => null}
          className="relative z-10"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-dark-3 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 overflow-hidden ">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex !w-full max-w-full pl-20">
                <DialogPanel
                  transition
                  className="pointer-events-auto relative w-screen transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
                >
                  <TransitionChild>
                    <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 duration-500 ease-in-out data-[closed]:opacity-0 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        onClick={() => router.push("/")}
                        className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                      </button>
                    </div>
                  </TransitionChild>
                  <div className="h-10"></div>
                  <ReelSwipersMobile reels={reelsData} />
                </DialogPanel>
              </div>
            </div>
          </div>
        </Dialog>
      )}
    </>
  );
};

export default Feeds;
