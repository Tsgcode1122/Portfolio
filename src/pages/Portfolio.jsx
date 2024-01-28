import React from "react";
import Projects from "../component/Projects";
import Footer from "../component/Footer";
import ScrollToTopButton from "../component/ScrollToTopButton";

const Portfolio = () => {
  return (
    <>
      <div className="projectpage">
        <Projects />
        <Footer />
        <ScrollToTopButton />
      </div>
    </>
  );
};

export default Portfolio;
