import React from "react";
import { Link } from "react-router-dom";
const ProjectCard = ({ project }) => {

    return (
        <div className="projects__card">
            <h2 className="projects__card-title">
                {project.title}
            </h2>

            <div className="projects__card-img">
                <img
                    width={280}
                    height={220}
                    src={project.img}
                    alt="albumStore"
                />
            </div>

            <div className="projects__card-description">
                {project.description}
            </div>

            <div className="projects__card-btns">
                <Link to={project.url}> Demo</Link>

                <Link to={project.github}>Github</Link>

            </div>
        </div>
    );
};

export default ProjectCard;
