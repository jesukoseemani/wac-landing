import AboutCompany from "@/components/AboutCompany";
import BehindWac from "@/components/BehindWac";
import Footer from "@/components/Footer";
import MoveableAds from "@/components/MoveableAds";
import Navbar from "@/components/Navbar";
import ScreenWrapper from "@/components/ScreenWrapper";
import Testimonial from "@/components/Testimonial";
import React from "react";

const About = () => {
  return (
    <ScreenWrapper>
      <Navbar />
      <AboutCompany />
      <BehindWac />
      <Testimonial classNameProps="mt-[83px] lg:mt-[100px]" />
      <MoveableAds classNameProps="mt-[117px] lg:mt-[119px]" />
      <Footer />
    </ScreenWrapper>
  );
};

export default About;
