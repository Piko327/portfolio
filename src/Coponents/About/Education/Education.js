import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import React, { useEffect, useState } from "react";
import "swiper/swiper.min.css";
import Card from "./Card";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

const Education = () => {
  const { width } = useWindowDimensions();
  const [slidesPerViewCount, setSlidesPerViewCount] = useState(1);

  const setslidesPerView = (width) => {
    if (width >= 902 && width <1200) {
      setSlidesPerViewCount(2);
    } else if (width >= 1200) {
      setSlidesPerViewCount(3);
    } else {
      setSlidesPerViewCount(1);
    }
  };

  useEffect(() => {
    setslidesPerView(width);
  }, [width]);
  return (
    <section className="education">
      <div className="slide-container">
        <h1 className="education_title"> education</h1>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={slidesPerViewCount}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <Card
              img="/certificates/JS Advanced - September 2022 - Certificate.jpeg"
              title={"JS Advanced "}
            />{" "}
          </SwiperSlide>
          <SwiperSlide>
            <Card
              img="/certificates/JS Applications - October 2022 - Certificate.jpeg"
              title={"JS Applications "}
            />{" "}
          </SwiperSlide>
          <SwiperSlide>
            <Card
              img="/certificates/Java Advanced - January 2022 - Certificate.jpeg"
              title={"Java Advanced  "}
            />{" "}
          </SwiperSlide>
          <SwiperSlide>
            <Card
              img="/certificates/Java OOP - February 2022 - Certificate.jpeg"
              title={"Java OOP "}
            />{" "}
          </SwiperSlide>
          <SwiperSlide>
            <Card
              img="/certificates/Programming Fundamentals with Java - September 2021 - Certificate.jpeg"
              title={"Java Fundamentals"}
            />{" "}
          </SwiperSlide>
          <SwiperSlide>
            <Card
              img="/certificates/MySQL - September 2022 - Certificate.jpeg"
              title={"MySQL"}
            />{" "}
          </SwiperSlide>
          ...
        </Swiper>
      </div>
    </section>
  );
};

export default Education;
