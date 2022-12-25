import React from "react";
import "./Contact.scss";
import { Heading } from "../../Components/Typography/Typography";
import {
    FaCodepen,
    FaDownload,
    FaEnvelope,
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
    FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
    return (
        <div className="contact">
            <Heading title="04 - Contact Me" />
            <p>
                Do you have a question, an idea, or a project you need help with? <br />
                Send me a message let's talk about it, Let's make something great!!
            </p>
            <br />
            <div className="contact__links">
                <div className="d-f">
                    {" "}
                    <a className="hover-btm mr-2" href="mailto:herroyalpianist@gmail.com">
                        <FaEnvelope /> Send me a mail
                    </a>
                    <a className="hover-btm" href="https://wa.link/tlqzgl">
                        <FaWhatsapp /> Whatsapp Me
                    </a>
                </div>
                <a className="hover-btm mr-2" target="_blank" href="/Morenike_Resume.pdf"
                ><FaDownload /> View my resume</a>
                <div className="d-f">
                    <a title="GitHub" className="mr-1 zoom" href="https://github.com/mo-renike">
                        <FaGithub />
                    </a>
                    <a title="Twitter" className="mr-1 zoom" href="https://twitter.com/Mo_renike_">
                        <FaTwitter />
                    </a>
                    <a title="Instagram" className="mr-1 zoom" href="https://www.instagram.com/herroyalpianist/">
                        <FaInstagram />
                    </a>
                    <a title="LinkedIn"
                        className="mr-1 zoom"
                        href="https://www.linkedin.com/in/morenike-oyewole/"
                    >
                        <FaLinkedin />
                    </a>
                    <a title="Codepen" className="mr-1 zoom" href="https://codepen.io/herroyalpianist">
                        <FaCodepen />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
