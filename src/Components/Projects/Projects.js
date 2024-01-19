import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../../helpers/projectData";
import ShowEffectProvider from "../../helpers/ShowEffect";


function Projects() {

    return (
        <ShowEffectProvider>
        <section className="projects_selection" id="projects" >
            <div className="title_container">
                <h2 className="second_title">What i do</h2>
                
                <h1 className="main_title">My Projects</h1>
            </div>
            <ul className="projectCard_container">
                {projects.map((project) =>
                    <li key={project.id}> <ProjectCard project={project} /></li>
                )}
            </ul>
            </section>
        </ShowEffectProvider>
    );
}

export default Projects;
