import AboutBox from "@/components/AboutBox";
import HomeHero from "@/components/HomeHero";
import MoveableAds from "@/components/MoveableAds";
import Navbar from "@/components/Navbar";
import ScreenWrapper from "@/components/ScreenWrapper";
import ServicesBox from "@/components/ServicesBox";
import Wallpaper from "@/components/Wallpaper";
import Image from "next/image";

export default function Home() {
  return (
    <ScreenWrapper>
      <Navbar />
      <HomeHero />
      <MoveableAds />
      <Wallpaper />
      <AboutBox />
      <ServicesBox />
    </ScreenWrapper>
  );
}
