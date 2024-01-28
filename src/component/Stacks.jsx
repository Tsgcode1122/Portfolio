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
        <div className="stack-skills">
          <div>
            <img src={Html} />
            <h5>HTML</h5>

            <article>
              Proficiency in developing semantically structured and responsive
              websites, harnessing the power of cutting-edge HTML5 features to
              enhance web functionality and performance.
            </article>
          </div>

          <div>
            <img src={Css} />
            <h5>CSS</h5>

            <article>
              Proficiency in crafting responsive layouts, incorporating dynamic
              animations, leveraging Sass preprocessors, and seamlessly
              integrating CSS with various web technologies for a harmonious and
              engaging user experience.
            </article>
          </div>
          <div>
            <img src={Javascript} />
            <h5>JAVASCRIPT</h5>

            <article>
              Proficiency in writing algorithms, adeptly utilizing modern ES6+
              features, and implementing robust asynchronous programming through
              the use of promises and async/await for enhanced application
              functionality.
            </article>
          </div>
          <div>
            <img src={react} />
            <h5>REACT</h5>

            <article>
              Proficient in React, excelling in creating dynamic user
              interfaces, utilizing hooks, and optimizing performance for
              seamless applications. Experienced in building scalable and
              feature-rich web solutions with a focus on reusability and
              maintainability.
            </article>
          </div>
          <div>
            <img src={Bootstrap} />
            <h5>BOOTSTRAP</h5>

            <article>
              Proficient in Bootstrap, adept at leveraging its powerful grid
              system, components, and utilities to rapidly build responsive and
              visually appealing web interfaces. Experienced in utilizing
              Bootstrap's versatility to streamline the development process and
              create polished, modern websites.
            </article>
          </div>
          <div>
            <img src={Tailwind} />
            <h5>TAILWIND</h5>

            <article>
              Proficient in Tailwind CSS, utilizing its utility-first approach
              to efficiently style and design responsive, modern interfaces.
              Experienced in leveraging Tailwind's extensive utility classes for
              streamlined and customizable web development, ensuring a clean and
              maintainable codebase.
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stacks;
