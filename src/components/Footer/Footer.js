import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className="container">
        <hr className={styles.styled} />
        <div className={styles.footerContent}>
          <img src="./assets/home/header/logo.png" alt="logo" />
          <div className={styles.footerMenu}>
            <Link>
              <span>About</span>
            </Link>
            <Link>
              <span>Portfolio</span>
            </Link>
            <Link>
              <span>Contact</span>
            </Link>
          </div>
          <div className={styles.footerContact}>
            <span>ISLAMABAD / </span>
            <a href="tel:+923104330070">
              <span>+92 310 4330070 / </span>
            </a>
            <a href="mailto:zainulebadd@gmail.com">
              <span>zainulebadd@gmail.com </span>
            </a>
          </div>
        </div>
        <div className={styles.socialContainer}>
          <div className={styles.iconContainer}>
            <Link to="#">
              <img
                src="./assets/home/hero/icons/behance@2x.png"
                alt="Behance.png"
              />
            </Link>
            <Link to="#">
              <img
                src="./../assets/home/hero/icons/dribbble@2x.png"
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
      </div>
      <hr className={styles.simple} />
      <div className={styles.copyright}>
        <span>Copyright © 2019 Graphics Studio | All rights reserved</span>
      </div>
    </div>
  );
};

export default Footer;
