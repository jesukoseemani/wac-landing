import React from "react";

const ArrowLeftRound = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
    >
      <rect x="0.5" y="0.5" width="49" height="49" rx="24.5" fill="#1C1C21" />
      <rect
        x="0.5"
        y="0.5"
        width="49"
        height="49"
        rx="24.5"
        stroke="url(#paint0_linear_2222_525)"
      />
      <path
        d="M28.5 18L21.5 25L28.5 32"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2222_525"
          x1="25"
          y1="0.999994"
          x2="25"
          y2="49"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.278527" stop-color="#2F2F37" />
          <stop offset="1" stop-color="#2F2F37" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ArrowLeftRound;
