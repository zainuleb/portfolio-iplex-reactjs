import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Tab.module.css";

const Tab = ({ children, active = 0 }) => {
  const [activeTab, setActiveTab] = useState(active);
  const [tabsData, setTabsData] = useState([]);

  console.log(children);

  useEffect(() => {
    let data = [];
    React.Children.forEach(children, (element) => {
      if (!React.isValidElement(element)) return;

      const {
        props: { tabTitle, children },
      } = element;

      data.push({ tabTitle, children });

      setTabsData(data);
    });
  }, [children]);

  return (
    <div className={styles.tabContainer}>
      <ul className={styles.tabList}>
        {tabsData.map(({ tabTitle }, idx) => (
          <li key={idx}>
            <Link
              className={`${idx === activeTab ? "active" : ""}`}
              to="#"
              onClick={() => setActiveTab(idx)}
            >
              <span>{tabTitle}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.content}>
        {tabsData[activeTab] && tabsData[activeTab].children}
      </div>
    </div>
  );
};

const TabPane = ({ children }) => {
  console.log(children);
  return children;
};

Tab.TabPane = TabPane;

export default Tab;
