import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {id:1,
      title: "Music Library",
      img: "/project/AlbumStore.png",
    },
    {id:2,
      title: "Online Shop",
      img: "/project/T-ShopImg.png",
    },
  ];
  return (
    <section className="projects_selection" >
      <div className="title_container">
        <h2 className="second_title">What i do</h2>
        <h1 className="main_title">My Projects</h1>
      </div>
      <ul className="projectCard_container">
        {projects.map((project)=> 
       <li> <ProjectCard key={project.id} project={project} /></li>
        )}
      </ul>
    </section>
  );
}

export default Projects;
