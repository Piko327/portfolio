import { EffectCoverflow, Pagination,Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import React, { useEffect, useState } from "react";
import "swiper/swiper.min.css";
import Card from "./Card";
import "swiper/css/effect-coverflow";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { RiBookletLine } from 'react-icons/ri';

const Education = () => {
  const { width } = useWindowDimensions();
  const [slidesPerViewCount, setSlidesPerViewCount] = useState(1);
useEffect(() => {
    setslidesPerView(width);
  }, [width]);

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
    <section className="education" >
      <div className="slide-container">
        <h1 className="education_title"><RiBookletLine className="eudcation_icon"/> education</h1>
        <div className="education_desc">
 <p>
In my journey as a web developer, I've delved into various courses that have shaped my skills and knowledge. The JS Application course served as a solid foundation, introducing me to the world of web application development. I learned about handling HTTP requests, working with REST APIs, and implementing authentication systems. It was an eye-opening experience that allowed me to understand the architecture behind JavaScript applications.
</p>
      </div>
         <Swiper className='swiper'
        effect={"coverflow"}
        grabCursor={true}
        navigation
        centeredSlides={true}
        slidesPerView={slidesPerViewCount}
        coverflowEffect={{
          rotate: 50,
          stretch: 10,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination,Navigation]}
  
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
      <div className="education_desc">

<p>
As my learning continued, I deepened my understanding through the JavaScript Advanced course. This course enabled me to explore the core aspects of JavaScript, including functions, arrays, and objects. I gained valuable insights into writing clean and efficient code, empowering me to create dynamic and interactive web experiences.
</p>
<p>
Combining the knowledge I acquired from these courses, I became well-versed in web development practices. I now possess the ability to design and build robust software systems, leveraging my understanding of JavaScript application architecture and advanced JavaScript concepts.
</p>

      </div>
    </section>
  );
};

export default Education;
