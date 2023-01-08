import React from 'react';
import "./SideBar.scss";
// import react-icons
import { FaTwitter, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";


const SideBar = () => {
    return (
        <div className="sidebar">
            {/* <a href="tel:+2348099772916"><FaPhone /></a> */}
            <a href="https://twitter.com/Mo_renike_"
            ><FaTwitter /></a>
            <a href="mailto:herroyalpianist@gmail.com"><FaEnvelope /></a>
            <a href="https://www.linkedin.com/in/morenike-oyewole/"
            ><FaLinkedin /></a>
            <a href="https://wa.link/tlqzgl"><FaWhatsapp /></a>
        </div>
    )
}

export default SideBar