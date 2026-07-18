import { useState } from "react";
import "./Contact.css";
import { sendEmail } from "./SendEmail";

function Contact() {
    let [emailSent, setEmailSent] = useState(false);

    return (
        <section id="contact">
            <h1>Let's Connect and Build Something Amazing!</h1>
            <p>
                I'm always interested in discussing new opportunities,
                <br />
                collaborating on exciting projects, or connecting with fellow
                developers.
                <br />
                Feel free to reach out!
            </p>
            <div id="contact-container">
                <button id="email-button">
                    <a
                        href="mailto:phan7085@mylaurier.ca"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Email me: <br /> phan7085@mylaurier.ca
                    </a>
                </button>
                <button id="phone-button">
                    <a href="tel:+1234567890">
                        Call me: <br /> +1 (226) 552-3205
                    </a>
                </button>
                <form
                    onSubmit={(e) => sendEmail(e, setEmailSent)}
                    id="contact-form"
                >
                    <legend>Or just leave a quick message:</legend>
                    <input
                        id="contact-name"
                        type="text"
                        placeholder="Your Name"
                        required
                    />
                    <input
                        id="contact-email"
                        type="email"
                        placeholder="Your Email"
                        required
                    />
                    <textarea
                        id="contact-message"
                        placeholder="Your Message"
                        name="message"
                        required
                    ></textarea>
                    <button type="submit">Send Message</button>
                </form>
                {emailSent && (
                    <p id="success-message">
                        Message sent successfully!
                        <br />
                        Thank you for reaching out. I'll get back to you soon!
                    </p>
                )}
            </div>
        </section>
    );
}

export default Contact;
