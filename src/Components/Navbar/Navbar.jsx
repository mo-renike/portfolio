import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import me from "../../Assets/img/WIN_20221111_09_33_03_Pro.jpg"

const Navbar = () => {
    const handleToggle = () => {
        let sidebar = document.querySelector(".nav__links");
        sidebar.classList.toggle("show");
    };
    // remove show class from nav__links when each link is clicked
    const handleLinkClick = () => {
        let sidebar = document.querySelector(".nav__links");
        sidebar.classList.remove("show");
    };
    return (
        <nav className="nav">
            {" "}
            <div className="nav__logo">
                <NavLink to="/">MO</NavLink>
            </div>
            <div className="nav__toggler" onClick={handleToggle}>
                <button>MENU</button> <span className="nav__toggler__line"></span>
            </div>
            <div className="nav__links">
                <div className="nav__links-wrapper">
                    {" "}
                    <NavLink
                        to="/"
                        activeclassname="nav__links_link--active"
                        className="nav__links_link hover-btm "
                        onClick={handleLinkClick}
                        title="Go back to reception"
                    >
                        01. Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        activeclassname="nav__links_link--active"
                        className="nav__links_link hover-btm "
                        onClick={handleLinkClick}
                        title="Get to know me, my works and experiences"
                    >
                        02. About
                    </NavLink>
                    <NavLink
                        to="/projects"
                        activeclassname="nav__links_link--active"
                        className="nav__links_link hover-btm "
                        onClick={handleLinkClick}
                        title="Check out Some cool projects I've worked on recently"
                    >
                        03. Projects
                    </NavLink>
                    <NavLink
                        to="/contact"
                        activeclassname="nav__links_link--active"
                        className="nav__links_link hover-btm "
                        onClick={handleLinkClick}
                        title="Contact me for gigs, projects ideas"
                    >
                        04. Contact
                    </NavLink>
                </div>
                <div className="nav__links-img">
                    <div className="about__intro_img">
                        <img
                            src={me}
                            alt="Morenike"
                        />
                    </div>
                </div>

                {/* close nav */}
                <button className="nav__links-close" onClick={handleToggle}>
                    X
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
