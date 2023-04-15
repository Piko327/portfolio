
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import React from 'react'
import 'swiper/swiper.min.css';


import Card from './Card';
const About = () => {
  return (
     <>
     <section className='education'>
     <div className='slide-container'>
<h1 className='education_title'> education</h1>



     <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
  
    >
          <SwiperSlide><Card img="/certificates/JS Advanced - September 2022 - Certificate.jpeg" title={"JS Advanced "}/> </SwiperSlide>
     <SwiperSlide><Card img="/certificates/JS Applications - October 2022 - Certificate.jpeg" title={"JS Applications "}/> </SwiperSlide>
      <SwiperSlide><Card img="/certificates/Java Advanced - January 2022 - Certificate.jpeg" title={"Java Advanced  "}/> </SwiperSlide>
      <SwiperSlide><Card img="/certificates/Java OOP - February 2022 - Certificate.jpeg" title={"Java OOP "}/> </SwiperSlide>
      <SwiperSlide><Card img="/certificates/Programming Fundamentals with Java - September 2021 - Certificate.jpeg" title={"Programming Fundamentals with Java "}/> </SwiperSlide>
      <SwiperSlide><Card img="/certificates/MySQL - September 2022 - Certificate.jpeg" title={"MySQL"}/> </SwiperSlide>
      ...
    </Swiper>
    </div>
     </section>
{/* <section className='skills_section'>
<h1 className='skills_title'>
    SKILLS
</h1>
    <ul className='skills'>
        <li className='skill'>HTML</li>
        <li className='skill'>CSS</li>
        <li className='skill'>JS</li>
        <li className='skill'>React</li>
        <li className='skill'>MySQL</li>
        <li className='skill'>GitHub</li>
        <li className='skill'>TailWind</li>
        <li className='skill'>Firebase</li>
    </ul>
</section> */}
  </> 
  )
}

export default About