import React from "react";
import { Link, Outlet } from "react-router-dom";
import myImg from "../Images/css-3.png";
import "../styles.scss";
import { FaWhatsapp, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
const Hero = () => {
  return (
    <>
      <section className="Hero">
        <div className="Hero-img">
          <img src={myImg} />
        </div>
        <div className="Hero-content">
          <h5>
            Hello, I'm <span className="waving-hand">👋</span>
          </h5>
          <h1>Falola Tosin S.</h1>
          <p> A Frontend Developer</p>
          <article>
            I'm a creative enthusiast committed to creating captivating digital
            experiences.With a keen eye for design and functionality, I bring
            ideas to life through seamless and visually appealing solutions.
          </article>
          <div className="Hero-cta">
            <Link to="/Portfolio">
              <div className="Hero-ctap"> View Projects</div>
            </Link>
            <ul className="social-icons">
              <li className="github">
                <a
                  href="https://github.com/Tsgcode1122"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </li>
              <li className="email">
                <a href="mailto:tsgcode201@gmail.com">
                  <FaEnvelope />
                </a>
              </li>
              <li className="insta">
                <a
                  href="https://www.instagram.com/soft_graphics"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsMedium />
                </a>
              </li>
              {/* <li className="whats">
                  <a
                    href="https://www.whatsapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp />
                  </a>
                </li> */}

              <li className="linkedin">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
