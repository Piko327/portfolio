import React from "react";
import { AiFillGithub, AiOutlinePaperClip } from "react-icons/ai";

function Projects() {
  return (
    <section className="project_selection" id="projects">
      <div className="title_container">
        <h2 className="second_title">What i do</h2>
        <h1 className="main_title">My Projects</h1>
      </div>

      <ul className="project_container">
        <li>
          <article className="project">
            <img
              src="/project/AlbumStore.png"
              className="project_img"
              alt="albumStore"
            ></img>

            <p className="project_description">
              This app allows you to have your own album store with your
              favorite albums. you can also create your account and your albums
              and edit them.
            </p>
            <div className="btn_container">
              <div>
                <a
                  href="https://album-store-ffa39.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn">
                    <AiOutlinePaperClip />
                  </button>
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/Piko327/moviecatalog"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn">
                    <AiFillGithub />
                  </button>
                </a>
              </div>
            </div>
          </article>
        </li>


        <li>
          <article className="project">
            <img
              src="/project/T-ShopImg.png"
              className="project_img"
              alt="Ecomerse"
            ></img>

            <p className="project_description">
            Our ecommerce website is an online platform where customers can browse and purchase a variety of products. With a user-friendly interface, customers can easily find and buy their desired items. 
            </p>
            <div className="btn_container">
              <div>
                <a
                  href="https://online-shop-brown.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn">
                    <AiOutlinePaperClip />
                  </button>
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/Piko327/OnlineShop"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn">
                    <AiFillGithub />
                  </button>
                </a>
              </div>
            </div>
          </article>
        </li>
      </ul>
    </section>
  );
}

export default Projects;
