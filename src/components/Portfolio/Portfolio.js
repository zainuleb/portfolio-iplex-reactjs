import React from "react";
import Tab from "../Tab/Tab";
import styles from "./Portfolio.module.css";
import { tabList } from "../../data/portfolioTabsData.js";
import CardCollection from "../UI/CardCollection/CardCollection";

const Portfolio = () => {
  return (
    <div className={styles.portfolioContainer}>
      <div className={styles.portfolioHeader}>
        <div className={styles.portfolioHeading}>
          <h2>Portfolio</h2>
        </div>
        <div className={styles.arrowbtn}></div>
      </div>

      <Tab active={1}>
        {tabList.map((tab, idx) => (
          <Tab.TabPane key={`Tab-${idx}`} tabTitle={tab.title}>
            <CardCollection tabContnet={tab.content} />
          </Tab.TabPane>
        ))}
      </Tab>
    </div>
  );
};

export default Portfolio;
