import React from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../../utils/projectData";

const Details = () => {
  const { id } = useParams();
  const project = projects.find((el) => el.id == id);
  console.log(project);
  return (
    <div className="details">
      = <h1 className="details_tittle">{project.tittle}</h1>
      <img
        width={400}
        height={200}
        src={project.img}
        className="details_img"
        alt="albumStore"
      ></img>
      <span className="details_desc">{project.description}</span>
      <div className="btns">
        <Link to={project.url} className="details_btn">
          Demo
        </Link>
        <Link to={project.github} className="details_btn">
          Github
        </Link>
      </div>
    </div>
  );
};

export default Details;
