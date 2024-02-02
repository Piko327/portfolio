import { motion } from "framer-motion";

const AnimatedText = ({ splitString }) => {
    return splitString.map((el, i) => (
        <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
                duration: 0.30,
                delay: i / 20,
            }}
            key={i}
        >
            {el}{" "}
        </motion.span>
    ));
};

export default AnimatedText;
