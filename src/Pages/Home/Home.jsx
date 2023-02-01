import React from "react";
import "./Home.scss";
import { BsArrowRight } from "react-icons/bs";
import { Heading } from "../../Components/Typography/Typography";
import { Link } from "react-router-dom";

const Home = () => {
    // const [show, setShow] = React.useState(false);

    // const takeAction = () => {
    //     setShow(!show);
    // };

    return (
        <div className="home">
            <div className="home__container">
                <div className="home__container_text">
                    <p>{"Hi, my name is"}</p>
                    <Heading title="Morenike Oyewole" />
                    <p>
                        I'm a Frontend developer with a passion for building solutions.  I am passionate about designing visually appealing interfaces and ensuring that the end-user experience is seamless.  With a strong eye for detail and a commitment to coding standards, I am confident in delivering high-quality projects that meet clients' needs.
                    </p>
                </div>{" "}
                <br />
                <Link style={{ display: "flex", alignItems: "center" }} className="pry_btn" to="/projects">
                    View My  Projects <BsArrowRight style={{ marginLeft: "10px" }} />
                </Link>
                {/* <button onClick={takeAction} className="pry_btn">
                    Connect with Me <BsArrowDown />{" "}
                </button>
                {show && (
                    <div className="home__container_btns">
                        <a href="/Morenike_Resume.pdf">
                            View my resume <BsArrowRight />
                        </a>
                        <a href="https://github.com/mo-renike">
                            Go to my Github <BsArrowRight />
                        </a>
                    </div>
                )} */}
            </div>
            {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
            <marquee scrollamount="10" className="marquee">
                WELCOME
            </marquee>
        </div >
    );
};

export default Home;
