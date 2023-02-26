import React from "react";
import { ProjectsData } from "./ProjectsData";
import "./Projects.scss";
import { Heading } from "../../Components/Typography/Typography";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SIngleProject from "./SIngleProject";


const Projects = () => {


  return (
    <div className="projects">
      <Heading title={`03 - Projects `} />
      <p>I like to get my hands dirty and I'm almost always working on someting. <br /> Here are some of projects I have worked on recent times. Check my  <a style={{textDecoration: "underline"}}  href="https://github.com/mo-renike">Github</a>  for more.
      </p>

      <div className="projects__container">
        {
          ProjectsData.map(
            ({ id, ...props }) => (
              <SIngleProject key={id} {...props} />
            )
          )
        }
      </div>
    </div>
  );
};

export default Projects;
