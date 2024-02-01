import React from 'react'
import { motion } from "framer-motion";
import picture from "./../../assets/Subject.png";

const Avatar = () => {
    return (
        <div className="hero__avatar">
            <div className="hero__avatar-title">
                <p>Hello</p>

                <p>, I'm Fiki </p>
            </div>
            <motion.div
                initial="hidden"
                animate={{
                    y: [10, -10, 8, -8, 6, -8, 8, -8, 10,],
                }}
                transition={{
                    duration: 6,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
                whileHover={{ y: 0, transition: { duration: 0.5, ease: "easeOut" } }}
            >
                <img className="hero__avatar-img" src={picture} alt="profile" />
            </motion.div>

        </div>
    )
}

export default Avatar