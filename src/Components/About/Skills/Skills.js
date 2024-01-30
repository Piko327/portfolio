import React, { useRef, useState, useLayoutEffect, useCallback } from "react"
import {
    motion,
    useViewportScroll,
    useTransform,
    useSpring
} from "framer-motion"

const Skills = () => {

    const skills = [
        {
            id: 1,
            title: "html",
            image: "/skills/html.png",
            color: "#fc490b"

        },
        {
            id: 2,
            title: "css",
            image: "/skills/css.png",
            color: "#2465f1"
        },
        {
            id: 3,
            title: "js",
            image: "/skills/js.png",
            color: "yellow"
        },
        {
            id: 4,
            title: "react",
            image: "/skills/react.png",
            color: "#61dbfb"
        },
        {
            id: 5,
            title: "github",
            image: "/skills/github.png",
            color: "#171515"
        },
        {
            id: 6,
            title: "tailwind",
            image: "/skills/tailwind.png",
            color: "#01b7d6"
        },
        {
            id: 7,
            title: "mysql",
            image: "/skills/mysql.png",
            color: "grey"
        },
        {
            id: 8,
            title: "firebase",
            image: "/skills/firebase.png",
            color: "#ffa001"
        },
    ];

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
                            skills.map(({ id, title, image, color }) => (
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

