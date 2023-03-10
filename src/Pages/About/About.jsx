import React from "react";
import {
    FaBootstrap,
    FaCss3,
    FaGitAlt,
    FaHtml5,
    FaReact,
    FaSass,
    FaVuejs,
    FaWordpress,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Heading } from "../../Components/Typography/Typography";
import mo from "../../Assets/img/IMG_20220209_162838_279.jpg";
import "./About.scss";

const About = () => {
    return (
        <div className="about">
            <Heading title="02 - About Me" />
            <div className="about__intro">
                <div className="about__intro_img">
                    <img src={mo} alt="Morenike" />
                </div>
                <div className="about__intro_text">
                    <p>
                        I started learning how to code from scratch mid 2020 during the
                        lockdown after I'd just lost my job as a full time musician due to the lockdown.
                        It has been an intresting and exciting journey, with it's own struggles and challenges 🥲 but as I began to dig deeper and hone my skills, I decided to transition fully into tech.
                    </p>
                    <p>
                        I am particularly passionate about building solutions that make
                        lives easier and better using mordern technology and tools. <br />
                        Before I got into tech, I had built <a href="http://homemusicschool.org">Home Music School</a> a platform that connects music teachers to parents that require their services  and also founded   <a
                            href="http://instagram.com/bandittude"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                           Bandittude
                        </a> an all-female platform that allows women in music find a place of expression and oppurtunities to learn, grow and be discovered.
                    </p>
                    <p>
                        I'm an enthusiastic, innovative developer with proven
                        experience focusing on building fast, scalable frontend applications
                        using a mobile-first approach.{" "}
                    </p>
                    <p>
                        I like to work closely with designers to take wireframes from
                        conception to implementation I absolutely enjoy creating and optimizing
                        interactive, user-friendly, and feature-rich websites/webapps from
                        start to finish.
                    </p>
                    <br />
                    <h3>Here are some technologies I’ve been working with recently:</h3>
                    <div className="about__tech">
                        <FaReact />
                        <FaHtml5 />
                        <FaCss3 />
                        <FaSass />
                        <FaBootstrap />
                        <FaWordpress />
                        <FaGitAlt />
                        <FaVuejs />
                    </div>
                    
                    {/* <p>
                        On the side, I'm a musician exploring Music education and Music
                        Performance. <br />
                    </p> */}
                    <p>
                        {" "}
                        I love listening to Rock, pop, EDM, neo-soul music and in my free time, I
                        enjoy watching movies, playing my piano and staying at home.
                    </p>{" "}
                    <br />{" "}
                    <Link className="btn" to="/projects">
                       Some of my projects
                    </Link>
                </div>
                {/* <div className="about__exp">
                    <SubHeading title="Experiences" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore,
                        officiis officia magni quod eius consectetur unde molestiae quis
                        minus corporis consequuntur fugiat facere beatae vel quia. Totam
                        in saepe facere ex minus, quos dignissimos deleniti sunt veniam
                        laudantium deserunt necessitatibus molestiae quam earum explicabo
                        architecto reprehenderit, esse, ipsum expedita? Quam!
                    </p>
                </div> */}
            </div>
        </div>
    );
};

export default About;
