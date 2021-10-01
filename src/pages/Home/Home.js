import React from "react";
import About from "../../components/About/About";
import Capabilities from "../../components/Capabilities/Capabilities";
import Hero from "../../components/Hero/Hero";
import HireMe from "../../components/HireMe/HireMe";
import Portfolio from "../../components/Portfolio/Portfolio";
import Testemonials from "../../components/Testemonials/Testemonials";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <main className={styles.mainContainer}>
      <section className={styles.heroSection}>
        <div className="container">
          <Hero />
        </div>
      </section>
      <section className={styles.aboutSection}>
        <div className="container">
          <About />
        </div>
      </section>
      <section className={styles.portfolioSection}>
        <div className="container">
          <Portfolio />
        </div>
      </section>
      <section className={styles.capabilitiesSection}>
        <div className="container">
          <Capabilities />
        </div>
      </section>
      <section className={styles.testemonialSection}>
        <div className="container">
          <Testemonials />
        </div>
      </section>
      <section className={styles.hireMeSection}>
        <div className="container">
          <HireMe />
        </div>
      </section>
    </main>
  );
};

export default Home;
