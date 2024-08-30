import Diverse from "@/components/Diverse";
import Faq from "@/components/Faq";
import FlexBoxLookLike from "@/components/FlexBoxLookLike";
import Footer from "@/components/Footer";
import MoveableAds from "@/components/MoveableAds";
import Navbar from "@/components/Navbar";
import ScreenWrapper from "@/components/ScreenWrapper";
import React from "react";

const Services = () => {
  const data = [
    {
      title: "Portrait Photography",
      content:
        "Our portrait photography service is all about showcasing your unique personality. Whether you need a professional headshot, a family portrait, or a personal photoshoot, we create images that reflect your true self. We work closely with you to bring out your best angles and expressions, ensuring every portrait tells your story.",
    },
    {
      title: "BRand strategy development",
      content:
        "Our event photography service is dedicated to capturing the magic of your special occasions. Whether it's a wedding, corporate event, or milestone celebration, we're there to document every heartfelt moment. We blend into the background, ensuring natural and candid shots that reflect the emotions of the day.",
    },
    {
      title: "logo & visual identity",
      content:
        "In the world of business, a compelling image can make all the difference. Our commercial photography service is designed to enhance your brand's visual identity. We create striking images for your products, services, and marketing campaigns that leave a lasting impact on your audience.",
    },
    {
      title: "packaging design",
      content:
        "In the world of business, a compelling image can make all the difference. Our commercial photography service is designed to enhance your brand's visual identity. We create striking images for your products, services, and marketing campaigns that leave a lasting impact on your audience.",
    },
    {
      title: "marketing collateral design ",
      content:
        "In the world of business, a compelling image can make all the difference. Our commercial photography service is designed to enhance your brand's visual identity. We create striking images for your products, services, and marketing campaigns that leave a lasting impact on your audience.",
    },
  ];
  const dataLength = data.length - 1;
  return (
    <ScreenWrapper>
      <Navbar />
      <Diverse />
      <div className="w-full mt-[50px] lg:mt-[100px] px-[16px] lg:px-[80px]">
        {data.map((item, i) => (
          <FlexBoxLookLike
            key={i}
            data={item}
            index={i}
            lastIndex={dataLength}
          />
        ))}
      </div>
      <Faq classNameProps="mt-[80px] lg:mt-[100px]" />
      <MoveableAds classNameProps="mt-[80px] lg:mt-[100px]" />
      <Footer />
    </ScreenWrapper>
  );
};

export default Services;
