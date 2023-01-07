import React from "react";
import "./Home.scss";
import { BsArrowRight } from "react-icons/bs";
import { Heading } from "../../Components/Typography/Typography";

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
                        I'm a Frontend developer. I love and enjoy
                        coding beautiful, functional things for the web - with a focus on
                        reusability, scalability and User satisfaction{" "}
                    </p>
                </div>{" "}
                <br />
                <a className="pry_btn" href="https://github.com/mo-renike">
                    Go to my Github <BsArrowRight />
                </a>
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
