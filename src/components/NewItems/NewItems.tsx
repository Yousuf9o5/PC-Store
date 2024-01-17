// import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import NavigationButtons from "../NavigationButtons/NavigationButtons";
import Card from "../Card/Card";
import SectionHeader from "../SectionHeader/SectionHeader";
import { useEffect, useState } from "react";

function NewItems() {
  const [scrWidth, setScrWidth] = useState<number>(window.innerWidth);
  const [data, _] = useState<number[]>([1, 2, 3, 4, 5, 6]);

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
    <section className="new-items container my-5 position-relative overflow-hidden">
      <SectionHeader title={"New Coming"} />

      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={20}
        slidesPerView={carouselSize()}
        pagination={{ clickable: true }}
        loop={true}
      >
        {data.map((item) => {
          return (
            <SwiperSlide key={item}>
              <div className="w-100 d-flex justify-content-center">
                <Card />
              </div>
            </SwiperSlide>
          );
        })}

        {scrWidth > 500 ? <NavigationButtons /> : <></>}
      </Swiper>
    </section>
  );
}

export default NewItems;
