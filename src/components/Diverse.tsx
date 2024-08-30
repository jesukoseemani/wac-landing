import Image from "next/image";
import React from "react";

const Diverse = () => {
  return (
    <div className="w-full mt-[40px] lg:mt-[80px] px-[16px] lg:px-[80px]">
      <h3 className="text-grey-50 text-sm lg:text-base font-semibold uppercase">
        Services
      </h3>
      <h2 className="text-white text-[28px] lg:text-[48px] font-semibold uppercase">
        diverse marketing services
      </h2>
      <p className="my-6 text-grey-50 text-sm lg:text-base max-w-[1012px]">
        Lorem ipsum dolor sit amet consectetur. Nullam elementum ut purus arcu
        integer. Neque dolor neque at blandit porttitor in magna eu adipiscing.
        Varius eget pretium a tincidunt tempus nisl. Suspendisse nibh pharetra
        purus pellentesque imperdiet volutpat.
      </p>
      <Image
        src="/images/studio.png"
        width={1279}
        height={582}
        quality={100}
        objectFit="cover"
        alt="boys"
      />
    </div>
  );
};

export default Diverse;
