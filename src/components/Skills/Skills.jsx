import skillsData from "../../data/skills";
import "./Skills.css";

function skillCategory(category, skills) {
    return (
        <div className="skill-category">
            <h2>{category}</h2>
            <ul className="skills-list">
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
}

function Skills() {
    return (
        <section id="skills">
            <h1>Technical Skills</h1>
            <p>
                Strong foundation in full-stack development, building scalable
                web applications <br />
                with modern frontend, backend, database, and cloud technologies.
            </p>
            <div id="skills-container">
                {Object.entries(skillsData).map(([category, skills]) =>
                    skillCategory(category, skills),
                )}
            </div>
        </section>
    );
}

export default Skills;
