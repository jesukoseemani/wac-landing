import { svgProps } from "@/lib/types";
import React from "react";

const LinkedInRounded = ({ click }: svgProps) => {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={click}
      className="cursor-pointer"
    >
      <rect x="0.5" y="0.5" width="41" height="41" rx="20.5" fill="#1C1C21" />
      <rect
        x="0.5"
        y="0.5"
        width="41"
        height="41"
        rx="20.5"
        stroke="url(#paint0_linear_2222_510)"
      />
      <g clip-path="url(#clip0_2222_510)">
        <path
          d="M27.8156 13H14.1812C13.5281 13 13 13.5156 13 14.1531V27.8438C13 28.4813 13.5281 29 14.1812 29H27.8156C28.4688 29 29 28.4813 29 27.8469V14.1531C29 13.5156 28.4688 13 27.8156 13ZM17.7469 26.6344H15.3719V18.9969H17.7469V26.6344ZM16.5594 17.9563C15.7969 17.9563 15.1813 17.3406 15.1813 16.5812C15.1813 15.8219 15.7969 15.2062 16.5594 15.2062C17.3188 15.2062 17.9344 15.8219 17.9344 16.5812C17.9344 17.3375 17.3188 17.9563 16.5594 17.9563ZM26.6344 26.6344H24.2625V22.9219C24.2625 22.0375 24.2469 20.8969 23.0281 20.8969C21.7937 20.8969 21.6062 21.8625 21.6062 22.8594V26.6344H19.2375V18.9969H21.5125V20.0406H21.5437C21.8594 19.4406 22.6344 18.8063 23.7875 18.8063C26.1906 18.8063 26.6344 20.3875 26.6344 22.4438V26.6344Z"
          fill="white"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_2222_510"
          x1="21"
          y1="0.999995"
          x2="21"
          y2="41"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.278527" stop-color="#2F2F37" />
          <stop offset="1" stop-color="#2F2F37" stopOpacity="0" />
        </linearGradient>
        <clipPath id="clip0_2222_510">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(13 13)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LinkedInRounded;
