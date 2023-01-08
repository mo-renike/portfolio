import React, { useEffect, useState } from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import NotFound from "./Components/NotFound/NotFound";
import { HelmetProvider } from "react-helmet-async";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Projects from "./Pages/Projects/Projects";
import SideBar from "./Components/SideBar/SideBar";
import PreLoader from "./Components/PreLoader/PreLoader";

const App = () => {
  // React.useEffect(() => {
  //   const cursor = document.querySelector(".cursor");
  //   const cursor1 = document.querySelector(".cursor1");

  //   document.addEventListener("mousemove", function (e) {
  //     cursor.style.cssText =
  //       "left: " + e.clientX + "px; top: " + e.clientY + "px;";
  //     cursor1.style.cssText =
  //       "left: " + e.clientX + "px; top: " + e.clientY + "px;";
  //   });
  // }, []);

  const [cusorX, setCursorX] = useState();
  const [cusorY, setCursorY] = useState();
  const [cursor2X, setCursor2X] = useState();
  const [cursor2Y, setCursor2Y] = useState();

  // add a class tp the cursor when hover on the links
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setCursorX(e.clientX);
      setCursorY(e.clientY);
      setCursor2X(e.clientX);
      setCursor2Y(e.clientY);
    });
    const preloader = document.querySelector(".preloader");
    // hide the preloader after 2 seconds
    setTimeout(() => {
      preloader.classList.add("hide-preloader");
    }, 2000);
  }, []);

  const cursor = document.querySelector(".cursor");
  const cursor1 = document.querySelector(".cursor1");
  const links = document.querySelectorAll("a");
  const btns = document.querySelectorAll("button");

  links.forEach((link) => {
    link.addEventListener("mouseover", () => {
      cursor.classList.add("link-grow");
      cursor1.classList.add("hide");
    });
    link.addEventListener("mouseleave", () => {
      cursor.classList.remove("link-grow");
      cursor1.classList.remove("hide");
    });
  });
  btns.forEach((btn) => {
    btn.addEventListener("mouseover", () => {
      cursor.classList.add("link-grow");
      cursor1.classList.add("hide");
    });
    btn.addEventListener("mouseleave", () => {
      cursor.classList.remove("link-grow");
      cursor1.classList.remove("hide");
    });
  });

  return (
    <HelmetProvider>
      <div className="App">
        <PreLoader />
        <Navbar />
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <div
          style={{
            left: cusorX,
            top: cusorY,
          }}
          className="cursor"
        ></div>
        <div
          style={{
            left: cursor2X,
            top: cursor2Y,
          }}
          className="cursor1"
        ></div>
      </div>
    </HelmetProvider>
  );
};

export default App;
