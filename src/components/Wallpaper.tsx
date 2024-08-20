import Image from "next/image";
import React from "react";

const Wallpaper = () => {
  return (
    <div className="w-full flex justify-center items-center px-4 md:px-0">
      <Image
        src="/images/wallpaper.png"
        width={1280}
        height={424}
        quality={100}
        objectFit="cover"
        alt="wallpaper"
      />
    </div>
  );
};

export default Wallpaper;
