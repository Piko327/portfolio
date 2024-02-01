
import React from 'react'
import Education from './Education'
import Skills from './Skills'
import './About.scss'
const About = () => {
    return (
        <section className='about' id="about">
            <Education />

            <Skills />
        </section>
    )
}

export default About