import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { BsArrowRight } from "react-icons/bs";

const SIngleProject = ({
    name,
    det,
    code,
    live,
    image,
    feats,
    stack,
}) => {



    return (
        <section>
            <br />
            <h2>{name}</h2>
            <br />
            <div className="singleProject">
                <div className="imageContainer">
                    <img src={image} alt={name} />
                </div>
                <div className="textContainer">
                    <div className="details">
                        <Tabs>
                            <TabList>
                                <Tab>
                                    <p>Overview</p>
                                </Tab>
                                <Tab>
                                    <p>Features</p>
                                </Tab>
                                <Tab>
                                    <p>Stack</p>
                                </Tab>
                            </TabList>

                            <TabPanel>
                                <div className="panel-content">
                                    <p>{det}</p>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="panel-content">
                                    <ul>
                                        {feats.map((feat) => (
                                            <li>{feat}</li>
                                        ))}
                                    </ul>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="panel-content">
                                    <ul>
                                        {stack.map((sta) => (
                                            <li>{sta}</li>
                                        ))}
                                    </ul>
                                </div>
                            </TabPanel>
                        </Tabs>
                        <br /> <br />
                        <div className="d-f">
                            <a style={{ display: "flex", alignItems: "center" }}
                                target="_blank" rel="noreferrer"
                                className="pry_btn" href={live}>
                                Live Demo <BsArrowRight style={{ marginLeft: "10px" }} />
                            </a>
                            <a target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center" }} className="pry_btn" href={code}>
                                Github Link <BsArrowRight style={{ marginLeft: "10px" }} />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default SIngleProject;
