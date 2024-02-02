import './Hero.scss'
import { motion } from "framer-motion";
import Buttons from './Buttons';
import { SlideFromLeft, SlideFromTop } from '../../utils/variants'
import Avatar from './Avatar';
import { heroInfo } from '../../utils/InfoStore';
import AnimatedText from '../AnimatedText';

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
                                <p >front-end</p>

                                <p >developer</p>
                            </div>

                            <p className="hero__description">
                                <AnimatedText splitString={heroInfo[0].content} />
                            </p>

                            <Buttons />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
