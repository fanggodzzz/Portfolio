import resume from "../../asset/docs/resume.pdf";
import download_icon from "../../asset/icons/download_icon_white.png";
import email_icon from "../../asset/icons/email_icon.png";
import github_icon from "../../asset/icons/github_icon.png";
import linkedin_icon from "../../asset/icons/linkedin_icon.png";
import portrait from "../../asset/images/framed_portrait.png";
import "./Hero.css";

const email = "phan7085@mylaurier.ca";
const github = "https://github.com/fanggodzzz";
const linkedin = "https://www.linkedin.com/in/nguyen-hoang-thanh-phan/";

function Hero() {
    return (
        <section id="home">
            <div id="hero-content">
                <div id="hero-text">
                    <h2>Nguyen Hoang Thanh Phan</h2>
                    <p id="hero-subtitle">
                        ComSci student building full-stack applications with
                        modern technologies and clean solutions.
                    </p>
                    <p id="hero-description">
                        Passionate about software engineering, backend
                        development, and creating scalable applications using
                        Java, Spring Boot, React, and cloud technologies.
                    </p>
                </div>
                <button id="download-resume-button">
                    <img src={download_icon} alt="Download Resume" /> &nbsp;
                    <a href={resume} download="resume.pdf">
                        Download Resume
                    </a>
                </button>
                <div id="hero-links">
                    <a className="hero-link" href={`mailto:${email}`}>
                        <img src={email_icon} alt="Email" />
                    </a>
                    <a className="hero-link" href={github}>
                        <img src={github_icon} alt="GitHub" />
                    </a>
                    <a className="hero-link" href={linkedin}>
                        <img src={linkedin_icon} alt="LinkedIn" />
                    </a>
                </div>
            </div>

            <figure id="portrait">
                <img src={portrait} alt="portrait" className="hero-image" />
            </figure>
        </section>
    );
}

export default Hero;
