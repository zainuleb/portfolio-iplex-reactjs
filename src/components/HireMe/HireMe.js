import React from "react";
import { Link } from "react-router-dom";
import styles from "./HireMe.module.css";

const HireMe = () => {
  return (
    <div className={styles.hireMeContainer}>
      <hr />
      <h2>Let’s Make Something Great Together</h2>
      <h6>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et t enim ad minim veniam, quis nostrud
        exercitation.
      </h6>
      <div className={styles.formContainer}>
        <input placeholder="Name" type="text" />
        <input placeholder="Email" type="text" />
        <input placeholder="Phone#" type="text" />
        <input placeholder="Budget" type="text" />
        <textarea placeholder="Message" />
      </div>
      <div className={styles.heroBtnContainer}>
        <div className={styles.hireBtn}>
          <Link to="#">
            <span>Hire Me</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HireMe;
