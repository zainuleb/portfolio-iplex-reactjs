import React from "react";
import styles from "./Card.module.css";

const Card = ({ cardContent }) => {
  return (
    <div className={styles.cardContainer}>
      <img src={cardContent.imageUrl} alt={cardContent.title} />
      <div className={styles.cardContent}>
        <h2>{cardContent.title}</h2>
        <h3>{cardContent.subTitle}</h3>
        <p>{cardContent.description}</p>
      </div>
    </div>
  );
};

export default Card;
