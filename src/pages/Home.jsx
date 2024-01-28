import React from "react";
import Hero from "../component/Hero";
import Stacks from "../component/Stacks";
import Projects from "../component/Projects";
import Getintouch from "../component/Getintouch";
import Footer from "../component/Footer";
import ScrollToTopButton from "../component/ScrollToTopButton";

const Home = () => {
  return (
    <>
      <Hero />
      <Stacks />
      <Projects />
      <Getintouch />
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Home;
