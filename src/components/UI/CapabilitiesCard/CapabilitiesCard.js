import React from "react";
import styles from "./CapabilitiesCard.module.css";

const CapabilitiesCard = ({ title, subTitle, refer }) => {
  return (
    <div className={styles.cardContainer}>
      <img alt={title} src="./assets/home/cap/Group 66@2x.png" />
      <h3>{title}</h3>
      <h5>{subTitle}</h5>
      <h5>{refer}</h5>
    </div>
  );
};

export default CapabilitiesCard;
