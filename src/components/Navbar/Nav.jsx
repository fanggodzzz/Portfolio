import "./Nav.css";

function Nav() {
    return (
        <nav>
            <a className="nav-link" href="#home">
                Home
            </a>
            <a className="nav-link" href="#skills">
                Skills
            </a>
            <a className="nav-link" href="#projects">
                Projects
            </a>
            <a className="nav-link" href="#contact">
                Contact
            </a>
        </nav>
    );
}

export default Nav;
