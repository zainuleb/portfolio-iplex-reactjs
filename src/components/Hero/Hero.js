import React from "react";
import styles from "./Hero.module.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroLeftContainer}>
        <div className={styles.heroContentContainer}>
          <h4>Hello, I am</h4>
          <h1>Mark Reccardo</h1>
          <p>
            A young <strong>UI/UX</strong> designer with crazy for mobile & web
            design.
          </p>
        </div>
        <div className={styles.socialContainer}>
          <p>Find Me on</p>
          <div className={styles.iconContainer}>
            <Link to="#">
              <img
                src="./assets/home/hero/icons/behance@2x.png"
                alt="Behance.png"
              />
            </Link>
            <Link to="#">
              <img
                src="./assets/home/hero/icons/dribbble@2x.png"
                alt="Dribble.png"
              />
            </Link>
            <Link to="#">
              <img
                src="./assets/home/hero/icons/insta@2x.png"
                alt="Insta.png"
              />
            </Link>
            <Link to="#">
              <img
                src="./assets/home/hero/icons/linked in@2x.png"
                alt="LinkedIn.png"
              />
            </Link>
            <Link to="#">
              <img
                src="./assets/home/hero/icons/pinterest@2x.png"
                alt="Pinterest.png"
              />
            </Link>
          </div>
        </div>
        <div className={styles.heroBtnContainer}>
          <div className={styles.hireBtn}>
            <Link to="#">
              <span>Hire Me</span>
            </Link>
          </div>
          <div className={styles.hireBtn}>
            <Link to="#">
              <span>Portfolio</span>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.heroRightContainer}>
        <img src="./assets/home/hero/Layer 4@2x.png" alt="profile.png" />
        <img src="./assets/home/hero/Group 31@2x.png" alt="item" />
        <img src="./assets/home/hero/Layer 2@2x.png" alt="Dotted.bg" />
      </div>
    </div>
  );
};

export default Hero;
