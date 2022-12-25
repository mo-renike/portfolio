import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import NotFound from "./Components/NotFound/NotFound";
import { HelmetProvider } from "react-helmet-async";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Projects from "./Pages/Projects/Projects";
import SideBar from "./Components/SideBar/SideBar";

import grain from "../src/Assets/blob/grain.png";
import linear from "../src/Assets/blob/linear.png";
import grain2 from "../src/Assets/blob/lg-grain.png";
import radial from "../src/Assets/blob/radial.png";

const App = () => {
  return (
    <HelmetProvider>
      <div className="App">
        <img className="image1" src={grain} alt="" />
        <img className="image2" src={linear} alt="" />
        <img className="image3" src={grain2} alt="" />
        <img className="image4" src={radial} alt="" />
        <Navbar />
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </HelmetProvider>
  );
};

export default App;
