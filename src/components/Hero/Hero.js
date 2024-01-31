import './Hero.scss'
import picture from "./../../assets/Subject.png";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion"


export const Hero = () => {


    const variant = {
        hidden: { opacity: 0, x: -100 },
        show: {
            opacity: 1,

            x: 0,
            transition: {
                duration: 1.2,
                delay: 0.2,
                x: { duration: 1.2 },
            },
        },
    };
    const variant2 = {
        hidden: { opacity: 0, x: 100 },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1.2,
                delay: 0.2,
                x: { duration: 1.2 },
            },
        },
    };

    return (


            <div className="shell">
                <motion.div initial="hidden" variants={variant2} whileInView="show"
                >
                    <div className="first_part">
                        <div className="hero__title">
                            <p className="hero__title_one">Hello</p>

                            <p>, I'm Fiki </p>

                        </div>

                        <img className="hero__img" src={picture} alt="profile" />
                    </div>
                </motion.div>
                <motion.div initial="hidden" variants={variant2} whileInView="show">
                    <div className="second_part">
                        <div className="hero__second_title">
                            <p className="hero__second_title_one">front-end </p>

                            <p className="hero__second_title_second">developer</p>
                        </div>
                        <span className="hero__description">
                            A programmer with experience in building personal websites and
                            Apps with JavaScript / React / CSS / HTML
                        </span>

                        <div className="hero__icons">
                            <a
                                className="hero__icon"
                                href="https://www.linkedin.com/in/fiki-ivanov-394463176/"
                            >
                                <AiFillLinkedin />
                            </a>

                            <a className="hero__icon" href="https://github.com/fikiivanov">
                                <AiFillGithub />
                            </a>
                        </div>

                        <div>
                            <a
                                className="hero__icon"
                                href="https://drive.google.com/file/d/1GMUVgzcIY7CgsK1fJYh_thsMloydwrtm/view"          >
                                <button className="Hero_btn">Download CV</button>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>

    );
};
