import React from "react";
import CapabilitiesCard from "../UI/CapabilitiesCard/CapabilitiesCard";
import styles from "./Capabilities.module.css";

const Capabilities = () => {
  return (
    <div className={styles.capabilitiesContainer}>
      <h2>My Capabilities</h2>
      <hr />
      <h6>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et t enim ad minim veniam, quis nostrud
        exercitation.
      </h6>
      <div className={styles.capabilitiesCardContainer}>
        <CapabilitiesCard
          title="Web Design"
          subTitle="Get awesome design services"
          refer="from inkyy.com"
        />
        <CapabilitiesCard
          title="Web Design"
          subTitle="Get awesome design services"
          refer="from inkyy.com"
        />
        <CapabilitiesCard
          title="Web Design"
          subTitle="Get awesome design services"
          refer="from inkyy.com"
        />
        <CapabilitiesCard
          title="Web Design"
          subTitle="Get awesome design services"
          refer="from inkyy.com"
        />
        <CapabilitiesCard
          title="Web Design"
          subTitle="Get awesome design services"
          refer="from inkyy.com"
        />
        <CapabilitiesCard
          title="Web Design"
          subTitle="Get awesome design services"
          refer="from inkyy.com"
        />
      </div>
    </div>
  );
};

export default Capabilities;
