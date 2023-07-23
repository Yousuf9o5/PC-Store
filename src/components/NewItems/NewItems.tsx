// import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import NavigationButtons from "../NavigationButtons/NavigationButtons";
import Card from "../Card/Card";
import SectionHeader from "../SectionHeader/SectionHeader";
import { useEffect, useState } from "react";

function NewItems() {
  const [scrWidth, setScrWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const screenSize = (): void => {
      setScrWidth(window.innerWidth);
    };

    window.addEventListener("resize", screenSize);

    return () => {
      window.removeEventListener("resize", screenSize);
    };
  }, []);

  const carouselSize = (): number => {
    if (scrWidth < 800) {
      return 1;
    }

    if (scrWidth < 1400) {
      return 2;
    }

    return 3;
  };

  return (
    <div className="new-items container my-5 position-relative overflow-hidden">
      <SectionHeader title={"New Coming"} />

      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={30}
        slidesPerView={carouselSize()}
        // navigation={true}
        pagination={{ clickable: true }}
        loop={true}
      >
        <SwiperSlide>
          <div className="w-100 d-flex justify-content-center">
            <Card />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-100 d-flex justify-content-center">
            <Card />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-100 d-flex justify-content-center">
            <Card />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-100 d-flex justify-content-center">
            <Card />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-100 d-flex justify-content-center">
            <Card />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-100 d-flex justify-content-center">
            <Card />
          </div>
        </SwiperSlide>
        {scrWidth > 500 ? <NavigationButtons /> : <></>}
      </Swiper>
    </div>
  );
}

export default NewItems;
