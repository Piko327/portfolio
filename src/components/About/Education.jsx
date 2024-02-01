import { EffectCoverflow, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import React, { useEffect, useState } from "react";
import "swiper/swiper.min.css";
import Card from "./Card";
import "swiper/css/effect-coverflow";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { RiBookletLine } from "react-icons/ri";
import ShowEffectProvider from "../../utils/ShowEffect";
import { certificateInfo } from "../../utils/InfoStore";





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
    return (
        <ShowEffectProvider >
            <section className="education">
                <div className="shell">
                    <div className="education__inner">
                        <h2 className="education__title">
                            My Learning Journey: Certificates and Achievements
                        </h2>

                        <div className="education__description">
                            <p>Initiating my programming journey, I acquired a robust grounding in Java, commencing with a fundamental course elucidating core coding principles. Seeking depth, I undertook an advanced Java program, delving into intricate elements including arrays, functional programming, and data structures. This trajectory progressed into a comprehensive Java Object-Oriented Programming (OOP) course, fostering mastery of SOLID principles and instilling a profound understanding of OOP. These experiences form the bedrock of my programming expertise, endowing me with a comprehensive command of Java and the fundamental tenets of object-oriented design.                            </p>
                        </div>

                        <h3 className="education__title">Certificates <RiBookletLine /></h3>

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
                            initialSlide={2}  // Set the initial slide index to 2 (third slide)
                            pagination={true}
                            modules={[EffectCoverflow, Pagination, Navigation]}
                        >
                            {certificateInfo.map((certificate) =>
                                <SwiperSlide key={certificate.id}>
                                    <Card certificate={certificate}
                                    />
                                </SwiperSlide>)}
                        </Swiper>

                        <div className="education__description">
                            <p>
                                Driven by an escalating passion for programming, I transitioned into the dynamic realm of JavaScript. An advanced JavaScript course broadened my scope, acquainting me with asynchronous programming and functional concepts. This interest led to a JavaScript application course, where I methodically explored the intricacies of web development. From orchestrating HTTP requests to mastering REST APIs, I refined my skills in constructing Single Page Applications and executing Client-Side Rendering. Concurrently, my exploration of HTML and CSS laid the groundwork for a seamless transition to React. This multifaceted learning journey, complemented by hands-on projects, converged with an internship where I deepened my understanding of clean code and BEM methodology, solidifying my unwavering commitment to perpetual learning and professional advancement.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </ShowEffectProvider>


    );
};

export default Education;
