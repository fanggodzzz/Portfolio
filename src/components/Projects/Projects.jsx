import projectsData from "../../data/projects";
import "./Projects.css";

function projectCard(projectName, project) {
    return (
        <div className="project-card" key={projectName}>
            <h2>{projectName}</h2>
            <p>{project.description}</p>
            <ul className="tech-list">
                {project.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul>
            <div className="project-links">
                {project.githubLink && (
                    <button>
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Code
                        </a>
                    </button>
                )}
                {project.demoLink && (
                    <button>
                        <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Demo
                        </a>
                    </button>
                )}
            </div>
        </div>
    );
}

function Projects() {
    return (
        <section id="projects">
            <h1>Projects</h1>
            <p>
                A collection of projects showcasing my experience in full-stack
                development,
                <br />
                software engineering, and problem-solving.
            </p>
            <div id="projects-container">
                {Object.entries(projectsData).map(([projectName, project]) =>
                    projectCard(projectName, project),
                )}
            </div>
        </section>
    );
}

export default Projects;
