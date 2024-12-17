import "./Project.css";
import React from "react";

function Project({ name, link, usedTechnologies, description }) {
  return (
    <div className="project">
      <a href={link}>
        <h1 className="project-title">{name}</h1>
      </a>
      <p className="project-desc">{description}</p>
      <p className="project-technologies">{usedTechnologies}</p>
    </div>
  );
}
export default Project;
