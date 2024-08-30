import Brands from "@/components/Brands";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import MoveableAds from "@/components/MoveableAds";
import Navbar from "@/components/Navbar";
import ProductContent from "@/components/ProductContent";
import ProjectHeader from "@/components/ProjectHeader";
import ScreenWrapper from "@/components/ScreenWrapper";
import Testimonial from "@/components/Testimonial";
import React from "react";

const Projects = () => {
  const images1 = [
    "/images/Image1.png",
    "/images/Image2.png",
    "/images/Image3.png",
    "/images/Image4.png",
  ];
  const images2 = [
    "/images/Image4.png",
    "/images/Image5.png",
    "/images/Image6.png",
    "/images/Image7.png",
  ];
  const images3 = [
    "/images/Image7.png",
    "/images/Image8.png",
    "/images/Image9.png",
    "/images/Image10.png",
  ];
  return (
    <ScreenWrapper>
      <Navbar />
      <ProjectHeader />
      <Brands />
      <div className="w-full mt-[50px] px-[16px] lg:px-[80px]">
        <ProductContent
          title="Lorem ipsum dolor sit amet consectetur."
          images={images1}
        />
        <ProductContent
          title="LLorem ipsum dolor sit amet consectetur."
          images={images2}
        />
        <ProductContent
          title="Lorem ipsum dolor sit amet consectetur. Pulvinar."
          images={images3}
        />
      </div>
      <Faq classNameProps="mt-[80px] lg:mt-[100px]" />
      <Testimonial classNameProps="mt-[83px] lg:mt-[100px]" />
      <MoveableAds classNameProps="mt-[117px] lg:mt-[119px]" />
      <Footer />
    </ScreenWrapper>
  );
};

export default Projects;
