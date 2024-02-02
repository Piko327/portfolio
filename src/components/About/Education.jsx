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
import { certificateInfo, educationInfo } from "../../utils/InfoStore";
import { motion } from "framer-motion";
import AnimatedText from "../AnimatedText";

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
    const test =
        "This trajectory progressed into a comprehensive Java Object-Oriented Programming(OOP) course, fostering mastery of SOLID principles andinstilling a profound understanding of OOP.These experiences form theedrock of my programming expertise, endowing me with a comprehensivecommand of Java and the fundamental tenets of object-oriented design.".split(" ")
    return (
        <ShowEffectProvider >
            <section className="education">
                <div className="shell">
                    <div className="education__inner">
                        <h2 className="education__title">
                            My Learning Journey: Certificates and Achievements
                        </h2>

                        <div className="education__description">

                            <p>
                                <AnimatedText splitString={educationInfo[1].content} />
                            </p>

                            <p>
                                <AnimatedText splitString={educationInfo[0].content} />
                            </p>
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
                                    <Card certificate={certificate} />
                                </SwiperSlide>)}
                        </Swiper>

                        <div className="education__description">
                            <p>
                                <AnimatedText splitString={educationInfo[1].content} />
                            </p>

                            <p>
                                <AnimatedText splitString={educationInfo[0].content} />
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </ShowEffectProvider>


    );
};

export default Education;
