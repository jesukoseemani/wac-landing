import Edgekart from "@/assets/SVG/icons/disposableicons/Edgekart";
import Hitton from "@/assets/SVG/icons/disposableicons/Hitton";
import Infinity from "@/assets/SVG/icons/disposableicons/Infinity";
import Omega from "@/assets/SVG/icons/disposableicons/Omega";
import WhatsappL from "@/assets/SVG/icons/disposableicons/WhatsappL";
import React from "react";

const Brands = () => {
  return (
    <div className="mt-[40px] lg:mt-[60px] overflow-hidden">
      <h2 className="text-grey-50 text-sm lg:text-base font-medium uppercase flex items-center justify-center w-full mb-[14px]">
        bRANDS we hAVE wORKED wITH
      </h2>
      <div className="w-full bg-dark-6 border-y border-solid border-dark-12 py-[14px] px-4 lg:px-[80px] lg:py-6 overflow-x-scroll scrollBarHide">
        <div className="flex space-x-6 w-max">
          <Infinity />
          <Omega />
          <WhatsappL />
          <Hitton />
          <Edgekart />
        </div>
      </div>
    </div>
  );
};

export default Brands;
