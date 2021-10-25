import React from "react";
import { Link } from "react-router-dom";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.contentContainer}>
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
        <div className={styles.aboutBtn}>
          <Link>Download CV</Link>
        </div>
      </div>
      <div className={styles.aboutImageContainer}>
        <img src="./assets/home/about/Layer 0@2x.png" alt="about.jpg" />
      </div>
    </div>
  );
};

export default About;
