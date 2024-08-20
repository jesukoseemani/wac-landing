import { svgProps } from "@/lib/types";
import React from "react";

const FacebookRounded = ({ click }: svgProps) => {
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
        stroke="url(#paint0_linear_2222_504)"
      />
      <g clip-path="url(#clip0_2222_504)">
        <path
          d="M29 21C29 16.5817 25.4183 13 21 13C16.5817 13 13 16.5817 13 21C13 24.993 15.9255 28.3027 19.75 28.9028V23.3125H17.7188V21H19.75V19.2375C19.75 17.2325 20.9444 16.125 22.7717 16.125C23.6467 16.125 24.5625 16.2812 24.5625 16.2812V18.25H23.5538C22.56 18.25 22.25 18.8667 22.25 19.5V21H24.4688L24.1141 23.3125H22.25V28.9028C26.0745 28.3027 29 24.993 29 21Z"
          fill="white"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_2222_504"
          x1="21"
          y1="0.999995"
          x2="21"
          y2="41"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.278527" stop-color="#2F2F37" />
          <stop offset="1" stop-color="#2F2F37" stop-opacity="0" />
        </linearGradient>
        <clipPath id="clip0_2222_504">
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

export default FacebookRounded;
