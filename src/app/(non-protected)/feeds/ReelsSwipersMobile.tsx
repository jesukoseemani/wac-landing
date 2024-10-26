import Image from "next/image";
import { useRef, useState } from "react";
import Stories from "stories-react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { EffectCoverflow, Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import "stories-react/dist/index.css";
import "./swiper.css";
import { ReelsProps } from "./page";

function ReelSwipersMobile({ reels }: { reels: ReelsProps[] }) {
  const swiperRef = useRef<SwiperClass | null>(null);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const Content = ({ item }: { item: ReelsProps }) => {
    return (
      <div className="relative ">
        <Stories
          onAllStoriesEnd={() => handleNext()}
          width="500px"
          height="100vh"
          stories={item.stories}
        />
      </div>
    );
  };

  return (
    <div className="!px-10 overflow-hidden">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        modules={[EffectCoverflow, Navigation, Scrollbar]}
        className="swiper_container"
      >
        {reels.map((item) => (
          <SwiperSlide key={item.id}>
            {({ isActive }) =>
              isActive ? (
                <Content item={item} />
              ) : (
                <Image
                  width={100}
                  height={100}
                  src={item.images}
                  alt="slide_image"
                  className="object-contain w-full h-full"
                />
              )
            }
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ReelSwipersMobile;
