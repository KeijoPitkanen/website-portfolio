import "./SharedStyles.css";
import "./Projects.css";
import React, { useEffect, useState } from "react";
import Project from "./Project";
import projectData from "/src/assets/projects.json";

function Projects() {
  //Add new projects to src/assets/projects.json
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectData);
  }, []);

  return (
    <div className="main-view">
      <div className="page-content">
        <div className="page-desc">
          <h1>Some of my projects</h1>
          <p>
            Here you can find a list of my projects that I have done or am
            currently working on.
          </p>
          <p>
            Most of my projects are either CLI tools that I personally need,
            coding exercises or just for fun.
          </p>
          <div className="project-list">
            {projects.map((project, index) => (
              <Project
                key={index}
                name={project.name}
                usedTechnologies={project.usedTechnologies}
                description={project.description}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
