import Footer from "@/components/Footer";
import FormWrapper from "@/components/FormWrapper";
import MoveableAds from "@/components/MoveableAds";
import Navbar from "@/components/Navbar";
import ScreenWrapper from "@/components/ScreenWrapper";
import Testimonial from "@/components/Testimonial";
import React from "react";

const ContactUs = () => {
  return (
    <ScreenWrapper>
      <Navbar />
      <FormWrapper />
      <Testimonial />
      <MoveableAds classNameProps="mt-[117px] lg:mt-[119px]" />
      <Footer />
    </ScreenWrapper>
  );
};

export default ContactUs;
