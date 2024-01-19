import { motion } from "framer-motion";
import React from "react";

const ShowEffectProvider = ({ children }) => {
    const variant = {
        hidden: { opacity: 0, scale: 0.8 },
        show: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1,
                x: { duration: 1 },
            },
        },
    };
    return (
        <motion.div initial="hidden" variants={variant} whileInView="show"
        >
            {children}
        </motion.div>
    );
};

export default ShowEffectProvider;
