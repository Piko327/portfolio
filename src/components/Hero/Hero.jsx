import './Hero.scss'
import { motion } from "framer-motion";
import Icons from './Icons';
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
                                A programmer with experience in building personal websites and
                                Apps with JavaScript / React / CSS / HTML
                            </p>

                            <Icons />

                            <div className="hero__btn">
                                <a
                                    href="https://drive.google.com/file/d/1GMUVgzcIY7CgsK1fJYh_thsMloydwrtm/view"          >
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
