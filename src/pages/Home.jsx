import React, { useEffect } from "react";
import Hero from "../component/Hero";
import Stacks from "../component/Stacks";
import Projects from "../component/Projects";
import Getintouch from "../component/Getintouch";
import Footer from "../component/Footer";
import ScrollToTopButton from "../component/ScrollToTopButton";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
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
