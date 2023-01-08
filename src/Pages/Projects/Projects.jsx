import React, { useState } from "react";
import { ProjectsData } from "./ProjectsData";
import "./Projects.scss";
import { Heading } from "../../Components/Typography/Typography";
import { BsArrowRight } from "react-icons/bs";

const Projects = () => {
  const [project, setProject] = useState(ProjectsData[0].img);

  const handleHover = (e) => {
    setProject(e.target.getAttribute("data-image"));
  };
  // create a carousel

  return (
    <div className="projects">
      {" "}
      <Heading title={`03 - Projects `} />
      <p>Here are some cool projects I have built lately</p>
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
                Others on Github <BsArrowRight className="ml-1" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="projects__mobile">

      </div>
    </div>
  );
};

export default Projects;
