import React from "react";
import Card from "../Card/Card";
import styles from "./CardCollection.module.css";

const CardCollection = ({ tabContnet }) => {
  return (
    <div className={styles.collectionContainer}>
      {tabContnet.map((item) => (
        <Card key={item.id} cardContent={item} />
      ))}
    </div>
  );
};

export default CardCollection;
