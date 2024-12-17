import "./Project.css";

function Project({ name, link, usedTechnologies, description, code, index }) {
  return (
    <div
      className="project"
      style={{
        "--animation-delay": `${index * 0.3}s`,
      }}
    >
      <a href={link}>
        <h1 className="project-title">{name}</h1>
      </a>
      <p className="project-desc">{description}</p>
      <p className="project-technologies">{usedTechnologies}</p>
    </div>
  );
}

export default Project;
