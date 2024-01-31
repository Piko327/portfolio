import { EffectCoverflow, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import React, { useEffect, useState } from "react";
import "swiper/swiper.min.css";
import Card from "./Card";
import "swiper/css/effect-coverflow";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { RiBookletLine } from "react-icons/ri";
import ShowEffectProvider from "../../../utils/ShowEffect";

const Education = () => {
    const { width } = useWindowDimensions();
    const [slidesPerViewCount, setSlidesPerViewCount] = useState(1);
    useEffect(() => {
        setslidesPerView(width);
    }, [width]);

    const setslidesPerView = (width) => {
        if (width >= 902 && width < 1200) {
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
        <ShowEffectProvider >
            <section className="education">
                <div className="slide-container">
                    <h1 className="education_title">
                        <RiBookletLine className="eudcation_icon" /> education
                    </h1>

                    <div className="education_desc">
                        <p>
                            During my journey as a developer, I initially gained a solid
                            foundation of Java programming. Through Java Fundamentals and Java
                            Advanced courses, I learned about object-oriented programming (OOP)
                            principles, SOLID principles, and more, which enabled me to design
                            to build robust software systems. Moving into web development, I
                            immersed myself in the JavaScript. The Advanced JavaScript course
                            further enhanced my skills by exploring key concepts such as
                            Functions, arrays, and objects. I honed my ability to write clean
                            and efficient code, which enabled me to create dynamic and
                            interactive web experience.
                        </p>
                    </div>

                    <Swiper
                        className="swiper"
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
                        modules={[EffectCoverflow, Pagination, Navigation]}
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
                    </Swiper>
                </div>
                <div className="education_desc">
                    <p>
                        I improved my JavaScript skills through the practical JS Application
                        course, mastering HTTP requests, REST API, and authentication. With a
                        deeper understanding of JavaScript app architecture, I can design
                        responsive web application. I know web technologies, I create robust
                        and engaging web applications by leveraging the fundamental concepts
                        of JavaScript and the application architecture. My solutions are
                        efficient and dynamic.
                    </p>
                </div>
            </section>
        </ShowEffectProvider>


    );
};

export default Education;
