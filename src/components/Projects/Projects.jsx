import React from "react";
import ProjectCard from "./ProjectCard";
import ShowEffectProvider from "../../utils/ShowEffect";
import { projectsInfo } from "../../utils/InfoStore";
import './Projects.scss'
function Projects() {
    return (<ShowEffectProvider>
        <section className="projects" id="projects" >
            <div className="shell">
                <div className="projects__inner">
                    <div className="projects__title">

                        <h2 >My Projects</h2>

                        <h3 >What i do</h3>
                    </div>

                    <ul className="projects__container">
                        {projectsInfo.map((project) =>
                            <li key={project.id}> <ProjectCard project={project} /></li>
                        )}
                    </ul>
                </div>
            </div>
        </section>
    </ShowEffectProvider>
    );
}

export default Projects;
