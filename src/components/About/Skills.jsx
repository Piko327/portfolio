import React, { useRef, useState, useLayoutEffect, useCallback } from "react"
import {
    motion,
    useViewportScroll,
    useTransform,
    useSpring
} from "framer-motion"
import { skillsInfo } from "../../utils/InfoStore";

const Skills = () => {

    const scrollRef = useRef(null)
    const ghostRef = useRef(null)
    const [scrollRange, setScrollRange] = useState(0)
    const [viewportW, setViewportW] = useState(0)

    useLayoutEffect(() => {
        scrollRef && setScrollRange(scrollRef.current.scrollWidth)
    }, [scrollRef])

    const onResize = useCallback(entries => {
        for (let entry of entries) {
            setViewportW(entry.contentRect.width)
        }
    }, [])

    useLayoutEffect(() => {
        const resizeObserver = new ResizeObserver(entries => onResize(entries))
        resizeObserver.observe(ghostRef.current)
        return () => resizeObserver.disconnect()
    }, [onResize])

    const { scrollYProgress } = useViewportScroll()
    const transform = useTransform(
        scrollYProgress,
        [1, 0],
        [0, -2 * scrollRange + viewportW]  // Increase the multiplier for a larger scroll distance
    );
    const physics = { damping: 15, mass: 0.27, stiffness: 55 }
    const spring = useSpring(transform, physics)

    return (
        <section className="skills_section">

            <h1 className="skills_title"> Tech Stack</h1>

            <div className="skills_container">
                <motion.section
                    
                    ref={scrollRef}
                    style={{ x: spring }}

                >
                    <ul className="skills" >
                        {
                            skillsInfo.map(({ id, title, image, color }) => (
                                <li className="skill" key={id} style={{ boxShadow: `1px 1px 2px ${color}` }} >
                                    <img src={image} alt="icons" className="skill_img"></img>
                                    <h2 className="skill_title" style={{ textShadow: `0px 0px 3px ${color}` }} >{title}</h2>
                                </li>
                            ))}
                        
                    </ul>
                </motion.section>
                <div ref={ghostRef} className="ghost" />
            </div>
        </section >
    );
};

export default Skills;

