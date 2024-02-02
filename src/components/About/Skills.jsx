import React, { useRef, useState, useLayoutEffect, useCallback } from "react"
import {
    motion,
    useViewportScroll,
    useTransform,
    useSpring
} from "framer-motion"
import { skillsInfo } from "../../utils/InfoStore";
import { BsStack } from "react-icons/bs";

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

    return (<>
        <section className="skills">
            <div className="skills__inner">
                <div className="skills__title">
                    <h2>technologies</h2>

                    <h3> I have worked with  <BsStack style={{ color: 'dark' }} /></h3>
                </div>

                <div className="skills__container">
                    <motion.section
                        ref={scrollRef}
                        style={{ x: spring }}
                    >
                        <ul >
                            {
                                skillsInfo.map(({ id, title, image, color }) => (
                                    <li className="skill" key={id} style={{ boxShadow: `1px 1px 2px ${color}` }} >
                                        <img src={image} alt="icons" className="skill-img"></img>
                                        <h2 className="skill-title" style={{ textShadow: `0px 0px 3px ${color}` }} >{title}</h2>
                                    </li>
                                ))}
                        </ul>
                    </motion.section>
                    <div ref={ghostRef} className="ghost" />
                </div>

            </div>
        </section ></>
    );
};

export default Skills;

