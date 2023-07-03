import picture from "./Subject.png";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

export const Home = () => {
  return (
    <div className="home">
      <div className="first_part">
        <div className="home_title">
          <p className="home_title_one">Hello</p>
          <p>, I'm Fiki </p>
        </div>
        <img className="home_img" src={picture} alt="profile" />
      </div>
      <div className="second_part">
        <div className="home_second_title">
          <p className="home_second_title_one">front-end </p>
          <p className="home_second_title_second">developer</p>
        </div>
        <span className="home_description">
          A passionate developer having an expirience of bulding Web Sites and
          Aplications with JavaScript / React / CSS / HTML
        </span>
        <div className="home_icons">
          <a
            className="home_icon"
            href="https://www.instagram.com/fikiivanovv/"
          >
            <AiFillInstagram />
          </a>
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
            href="https://drive.google.com/file/d/1BPyVY3XCUVpI8xtueIH7fP1cJJBM_Wun/view?usp=sharing"
          >
            <button className="home_btn">Download CV</button>
          </a>
        </div>
      </div>
    </div>
  );
};
