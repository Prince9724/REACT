import React from "react";
import "./Hero.css";
import Profile from "./image/img-1.jpeg";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">

        <div className="hero-content">

          <span className="hero-badge">
            🚀 Available For Work
          </span>

          <h1>
            Hi, I'm <span>Prince Gond</span>
          </h1>

          <h2>Full Stack Web Developer</h2>

          <p>
            Passionate Full Stack Developer focused on creating modern,
            responsive and user-friendly web applications. I specialize in
            <strong> React, JavaScript, Bootstrap, Node.js and MongoDB</strong>.
            I love transforming ideas into beautiful digital experiences.
          </p>

          <div className="hero-btns">
            <a href="#contact">
              <button className="primary-btn">
                Contact Me
              </button>
            </a>

            <a href="#project">
              <button className="secondary-btn">
                View Projects
              </button>
            </a>
          </div>

          <div className="social-links">
            <a href="https://www.instagram.com/lion_prince_001/" target="_blank">
              <i className="ri-instagram-line"></i>
            </a>

            <a href="https://github.com/Prince9724" target="_blank">
              <i className="ri-github-fill"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/prince-gond-69090b375/"
              target="_blank"
            >
              <i className="ri-linkedin-box-fill"></i>
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-wrapper">
            <img src={Profile} alt="Prince Gond" />
          </div>
        </div>
      </div>

      <div className="stats-container">
        <div className="stat-box">
          <h3>16+</h3>
          <p>Projects</p>
        </div>

        <div className="stat-box">
          <h3>8+</h3>
          <p>Technologies</p>
        </div>

        <div className="stat-box">
          <h3>6+</h3>
          <p>Months Practice</p>
        </div>

        <div className="stat-box">
          <h3>1+</h3>
          <p>Competition</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;