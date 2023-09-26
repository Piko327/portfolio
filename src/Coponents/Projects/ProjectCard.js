import React from "react";
import { Link} from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <article className="projectCard">
      <h1 className="projectCard_title">{project.title}</h1>
      <img
        width={400}
        height={200}
        src={project.img}
        className="projectCard_img"
        alt="albumStore"
      ></img>
      <div className="projectCard_hover">
      <Link to={`/Details/${project.id}`} className="projectCard_hover_btn" >
   
          Details
          </Link>
      </div>
    </article>
  );
};

export default ProjectCard;
