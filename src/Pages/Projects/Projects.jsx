import React, { useState } from "react";
import { ProjectsData } from "./ProjectsData";
import "./Projects.scss";
import { Heading } from "../../Components/Typography/Typography";
import { BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";


const Projects = () => {
  const [project, setProject] = useState(ProjectsData[0].img);

  const handleHover = (e) => {
    setProject(e.target.getAttribute("data-image"));
  };

  return (
    <div className="projects">
      <Heading title={`03 - Projects `} />
      <p>I like to get my hands dirty and I'm almost always working on someting. <br /> Here are some of projects I have worked on recent times. </p>
      <div className="projects__wrapper">
        <div className="projects__wrapper_display">
          <img src={project} alt="project" />
        </div>
        <div className="projects__wrapper_links">
          <ul>
            {ProjectsData.map((project, index) => (
              <li key={index}>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  onMouseOver={handleHover}
                  data-image={project.img}
                  title={project.det}
                >
                  {project.name} <BsArrowRight className="ml-1" />
                </a>
              </li>
            ))}
            <li>
              <a
                href="http://github.com/mo-renike"
                target="_blank"
                rel="noopener noreferrer"
              >
                More on Github <BsArrowRight className="ml-1" />
              </a>
            </li>
            <li>
              
              <Link
                to="/contact"
              >
                Contact Me <BsArrowRight className="ml-1" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="projects__mobile">
        <br />
        <br />
        <div className="projects__mobile_wrapper">
          <Swiper
            spaceBetween={5}
            slidesPerView={1}
            loop={true}
            navigation={true}
            modules={[Navigation]}
          >
            {ProjectsData.map((project, index) => (
              <SwiperSlide key={index}>
                <img src={project.img} alt="project" />
                <br />
                <br />
                <a href={project.live} target="_blank" rel="noreferrer">
                  {project.name}
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <br />
        <Link to="/contact">Contact Me</Link>
        <br />
        <a href="http://github.com/mo-renike" target="_blank" rel="noopener noreferrer">Go to Github</a>
      </div>
    </div>
  );
};

export default Projects;
