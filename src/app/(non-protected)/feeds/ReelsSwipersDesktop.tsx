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

function ReelSwipersDesktop({ reels }: { reels: ReelsProps[] }) {
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
      <>
        <Stories
          onAllStoriesEnd={() => handleNext()}
          width="400px"
          height="600px"
          stories={item.stories}
        />
      </>
    );
  };

  return (
    <div className="container overflow-hidden">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView="auto"
        scrollbar={{ draggable: true }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
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
                  width={400}
                  height={600}
                  src={item.images}
                  alt="slide_image"
                />
              )
            }
          </SwiperSlide>
        ))}

        <div
          onClick={handlePrev}
          className="swiper-button-prev slider-arrow !hidden lg:!flex"
        >
          {"<"}
        </div>
        <div
          onClick={handleNext}
          className="swiper-button-next slider-arrow !hidden lg:!flex"
        >
          {">"}
        </div>
      </Swiper>
    </div>
  );
}

export default ReelSwipersDesktop;
