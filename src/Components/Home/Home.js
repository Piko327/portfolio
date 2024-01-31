

import picture from "./Subject.png";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion"


export const Home = () => {


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
                        <div className="home_title">
                            <p className="home_title_one">Hello</p>

                            <p>, I'm Fiki </p>

                        </div>

                        <img className="home_img" src={picture} alt="profile" />
                    </div>
                </motion.div>
                <motion.div initial="hidden" variants={variant2} whileInView="show">
                    <div className="second_part">
                        <div className="home_second_title">
                            <p className="home_second_title_one">front-end </p>

                            <p className="home_second_title_second">developer</p>
                        </div>
                        <span className="home_description">
                            A programmer with experience in building personal websites and
                            Apps with JavaScript / React / CSS / HTML
                        </span>

                        <div className="home_icons">
                            <a
                                className="home_icon"
                                href="https://www.linkedin.com/in/fiki-ivanov-394463176/"
                            >
                                <AiFillLinkedin />
                            </a>

                            <a className="home_icon" href="https://github.com/fikiivanov">
                                <AiFillGithub />
                            </a>
                        </div>

                        <div>
                            <a
                                className="home_icon"
                                href="https://drive.google.com/file/d/1GMUVgzcIY7CgsK1fJYh_thsMloydwrtm/view"          >
                                <button className="home_btn">Download CV</button>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>

    );
};
