import "./Nav.css";
import useScrollSpy from "./ScrollSpy";

function Nav() {
    const activeSection = useScrollSpy([
        "home",
        "skills",
        "projects",
        "contact",
    ]);

    return (
        <nav>
            <a
                className={`nav-link ${activeSection === "home" ? "active" : ""}`}
                href="#home"
            >
                Home
            </a>
            <a
                className={`nav-link ${activeSection === "skills" ? "active" : ""}`}
                href="#skills"
            >
                Skills
            </a>
            <a
                className={`nav-link ${activeSection === "projects" ? "active" : ""}`}
                href="#projects"
            >
                Projects
            </a>
            <a
                className={`nav-link ${activeSection === "contact" ? "active" : ""}`}
                href="#contact"
            >
                Contact
            </a>
        </nav>
    );
}

export default Nav;
