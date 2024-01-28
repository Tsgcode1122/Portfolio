import React from "react";
import Html from "../Images/html-5.png";
import Css from "../Images/css-3.png";
import Javascript from "../Images/js.png";
import react from "../Images/physics.png";
import Tailwind from "../Images/tailwind.png";
import Bootstrap from "../Images/bootstrap.webp";
import Scss from "../Images/sass.png";
import Project1 from "../PortfolioImages/mobile1.png";
import Project2 from "../PortfolioImages/mobile2.png";
import Project3 from "../PortfolioImages/mobile5.png";
import Project4 from "../PortfolioImages/mobile3.png";
import Project5 from "../PortfolioImages/mobile4.png";
import Project6 from "../PortfolioImages/mobile6.png";
import Project7 from "../PortfolioImages/mobile7.png";
import "../Styles.scss";
const Projects = () => {
  return (
    <>
      <section className="Project">
        <h2>Projects</h2>
        <div className="Projects">
          <div className="Project-img">
            <img src={Project1} />
            <div className="Project-image-icons">
              <h4>IgnitionCarcare</h4>
              <div className="Project-icons">
                <img src={Html} />
                <img src={Css} />
                <img src={Javascript} />
              </div>
            </div>
          </div>
          <div className="Project-desc">
            <article>
              Designed a mobile auto car company. Merging HTML, CSS, and
              JavaScript,the site delivers a seamless and engaging experience
              for users seeking on-the-go car care solutions.
            </article>
            <div className="Project-live">
              <a
                href="http://Www.ignitioncarcare.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>
              <a
                href="https://github.com/Tsgcode1122"
                target="_blank"
                rel="noopener noreferrer"
                className="nonas"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
        <div className="Projects">
          <div className="Project-img">
            <img src={Project3} />
            <div className="Project-image-icons">
              <h4>TsCalculator</h4>
              <div className="Project-icons">
                <img src={react} />
                <img src={Scss} />
              </div>
            </div>
          </div>
          <div className="Project-desc">
            <article>
              Crafted a Freelancer Calculator web app, enabling users to
              estimate project costs and generate invoices seamlessly. With
              versatile dark and light themes, it delivers a tailored experience
              for efficient project financial management.
            </article>
            <div className="Project-live">
              <a
                href="https://tsf-calculator.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>
              <a
                href="https://github.com/Tsgcode1122"
                target="_blank"
                rel="noopener noreferrer"
                className="nonas"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
        <div className="Projects">
          <div className="Project-img">
            <img src={Project4} />
            <div className="Project-image-icons">
              <h4>AuraaGlow</h4>
              <div className="Project-icons">
                <img src={react} />
                <img src={Scss} />
              </div>
            </div>
          </div>
          <div className="Project-desc">
            <article>
              Auraa Glow, a skincare website offering a seamless platform for
              users to explore and discover premium skincare products. The
              website, built with attention to detail using modern technologies,
              ensures a delightful and informative experience for skincare
              enthusiasts
            </article>
            <div className="Project-live">
              <a
                href="https://auraaglow.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>
              <a
                href="https://github.com/Tsgcode1122"
                target="_blank"
                rel="noopener noreferrer"
                className="nonas"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
        <div className="Projects">
          <div className="Project-img">
            <img src={Project2} />
            <div className="Project-image-icons">
              <h4>TsgNotary</h4>
              <div className="Project-icons">
                <img src={react} />
                <img src={Scss} />
              </div>
            </div>
          </div>
          <div className="Project-desc">
            <article>
              TsgNotary, a notary website developed using React, Scss, the
              website ensures a smooth user experience for individuals seeking
              notary services.
            </article>
            <div className="Project-live">
              <a
                href="https://tsgnotary.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>
              <a
                href="https://github.com/Tsgcode1122"
                target="_blank"
                rel="noopener noreferrer"
                className="nonas"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>

        <div className="Projects">
          <div className="Project-img">
            <img src={Project5} />
            <div className="Project-image-icons">
              <h4>Soft Enterprise</h4>
              <div className="Project-icons">
                <img src={Html} />
                <img src={Css} />
                <img src={Javascript} />
              </div>
            </div>
          </div>
          <div className="Project-desc">
            <article>
              Crafted Soft Enterprise, a dynamic web design agency website that
              serves as a showcase of cutting-edge design and technology.
              Tailored for a seamless user experience, this platform
              demonstrates the agency's commitment to innovation and creativity
              in the digital landscape.
            </article>
            <div className="Project-live">
              <a
                href="https://auraaglow.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>
              <a
                href="https://github.com/Tsgcode1122"
                target="_blank"
                rel="noopener noreferrer"
                className="nonas"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
        <div className="Projects">
          <div className="Project-img">
            <img src={Project6} />
            <div className="Project-image-icons">
              <h4>Country Api</h4>
              <div className="Project-icons">
                <img src={react} />
                <img src={Scss} />
              </div>
            </div>
          </div>
          <div className="Project-desc">
            <article>
              Developed a comprehensive Country API utilizing RESTful practices,
              providing a reliable source for generating detailed information
              about countries. This API serves as a versatile tool for accessing
              and retrieving essential data, demonstrating the seamless
              integration of RESTful principles.
            </article>
            <div className="Project-live">
              <a
                href="https://tsgcountries-api.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>
              <a
                href="https://github.com/Tsgcode1122"
                target="_blank"
                rel="noopener noreferrer"
                className="nonas"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
        <div className="Projects">
          <div className="Project-img">
            <img src={Project7} />
            <div className="Project-image-icons">
              <h4>Comfy Store</h4>
              <div className="Project-icons">
                <img src={react} />
                <img src={Tailwind} />
              </div>
            </div>
          </div>
          <div className="Project-desc">
            <article>
              Crafted a E-commerce website, seamlessly integrating an external
              API to enhance the shopping experience. This project not only
              showcases the aesthetic appeal of a virtual storefront but also
              highlights the technical finesse in leveraging external data
              sources.
            </article>
            <div className="Project-live">
              <a
                href="https://tsgcomfystore.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>
              <a
                href="https://github.com/Tsgcode1122"
                target="_blank"
                rel="noopener noreferrer"
                className="nonas"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
