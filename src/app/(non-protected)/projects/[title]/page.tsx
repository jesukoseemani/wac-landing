import Footer from "@/components/Footer";
import MoveableAds from "@/components/MoveableAds";
import Navbar from "@/components/Navbar";
import ProjectDel from "@/components/ProjectDel";
import ScreenWrapper from "@/components/ScreenWrapper";
import React from "react";

const ProjectDetails = () => {
  return (
    <ScreenWrapper>
      <Navbar />
      <ProjectDel />
      <MoveableAds classNameProps="mt-[117px] lg:mt-[119px]" />
      <Footer />
    </ScreenWrapper>
  );
};

export default ProjectDetails;
