import React from "react";
import Html from "../Images/html-5.png";
import Css from "../Images/css-3.png";
import Javascript from "../Images/js.png";
import react from "../Images/physics.png";
import Tailwind from "../Images/tailwind.png";
import Bootstrap from "../Images/bootstrap.webp";
import Scss from "../Images/sass.png";

const Stacks = () => {
  return (
    <>
      <section className="stack">
        <h2>Stacks & Technology</h2>
        <div className="stack-icon">
          <img src={Html} />
          <img src={Css} />
          <img src={Javascript} />
          <img src={react} />
          <img src={Bootstrap} />
          <img src={Scss} />
          <img src={Tailwind} />
        </div>
      </section>
    </>
  );
};

export default Stacks;
