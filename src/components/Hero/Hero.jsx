import './Hero.scss'
import { motion } from "framer-motion";
import Buttons from './Buttons';
import { SlideFromLeft, SlideFromTop } from '../../utils/variants'
import Avatar from './Avatar';

export const Hero = () => {

    return (
        <section className='hero'>
            <div className="shell">
                <div className='hero__inner'>
                    <motion.div initial="hidden" variants={SlideFromLeft} whileInView="show">
                        <Avatar />
                    </motion.div>

                    <motion.div initial="hidden" variants={SlideFromTop} whileInView="show">
                        <div className="hero__content">

                            <div className="hero__title">
                                <p >front-end </p>

                                <p >developer</p>
                            </div>
                            <p className="hero__description">
                                Experienced developer capable of building dynamic websites and applications, showcasing skills in JavaScript / React / CSS / HTML through successful personal projects. Ready to bring that same passion and expertise to elevate your projects.
                            </p>

                            <Buttons />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
