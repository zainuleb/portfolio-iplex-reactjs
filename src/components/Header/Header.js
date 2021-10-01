import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className="container">
      <div className={styles.navContainer}>
        <div className={styles.logoContainer}>
          <img
            className={styles.logoImage}
            src="./assets/home/header/logo.png"
            alt="logo.png"
          />
        </div>
        <div className={styles.dottedBg}>
          <img src="./assets/home/header/Layer 2 copy@2x.png" alt="dotted bg" />
        </div>
        <div className={styles.navListContainer}>
          <ul className={styles.navList}>
            <li>
              <span> About </span>
            </li>
            <li>
              <span> Portfolio</span>
            </li>
            <li>
              <span> Contact </span>
            </li>
            <li>
              <span> Get Started </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
