import AboutBox from "@/components/AboutBox";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import HomeHero from "@/components/HomeHero";
import MoveableAds from "@/components/MoveableAds";
import Navbar from "@/components/Navbar";
import ScreenWrapper from "@/components/ScreenWrapper";
import ServicesBox from "@/components/ServicesBox";
import Testimonial from "@/components/Testimonial";
import Wallpaper from "@/components/Wallpaper";
import WorksBox from "@/components/WorksBox";

export default function Home() {
  return (
    <ScreenWrapper>
      <Navbar />
      <HomeHero />
      <MoveableAds />
      <Wallpaper />
      <AboutBox />
      <ServicesBox />
      <WorksBox />
      <Faq />
      <Testimonial />
      <MoveableAds classNameProps="mt-[117px] lg:mt-[119px]" />
      <Footer />
    </ScreenWrapper>
  );
}
