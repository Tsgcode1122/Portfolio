import React from "react";
import Stacks from "../component/Stacks";
import StackSkills from "../component/StackSkills";
import Footer from "../component/Footer";
import ScrollToTopButton from "../component/ScrollToTopButton";

const Skills = () => {
  return (
    <>
      <div className="Skillspage">
        <Stacks />
        <StackSkills />
        <Footer />
        <ScrollToTopButton />
      </div>
    </>
  );
};

export default Skills;
