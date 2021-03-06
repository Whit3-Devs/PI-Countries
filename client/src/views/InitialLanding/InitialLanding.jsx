import React from "react";
import { Link } from "react-router-dom";
import styles from "./InitialLanding.module.css";
import avion from "../../assets/images/avion.png";
import world from "../../assets/images/world.png";
import surfing from "../../assets/images/activities/surfing.jpg";
import rafting from "../../assets/images/activities/rafting.jpg";
import snorkel from "../../assets/images/activities/snorkel.jpg";
import climbing from "../../assets/images/activities/climbing.jpg";

const InitialLanding = () => {
  return (
    <>
      <div className={styles.slider}>
        <ul>
          <li>
            <img src={surfing} alt="Imagen de Surfing" />
          </li>
          <li>
            <img src={rafting} alt="Imagen de Rafting" />
          </li>
          <li>
            <img src={snorkel} alt="Imagen de snorkel" />
          </li>
          <li>
            <img src={climbing} alt="Imagen de Climbing" />
          </li>
        </ul>
      </div>
      <main className={styles.landingPageContainer}>
        <div className={styles.containerWorld}>
          <div className={styles.containerInfo}>
            <h1 className={styles.title} >Countries App</h1>
            <h2 className={styles.subTitle}>Your ideal place and activity</h2>
            <p className={styles.text}>
            Find the best locations so you can plan and build your roadmap. Making the most of the incredible experiences that each site can give you.
            </p>

            <Link to="/countries" className={styles.buttonLink}>See more</Link>
          </div>
          <div className={styles.containerAnimation}>
            <img src={avion} alt="Imagen de avion" className={styles.avion} />
            <img src={world} alt="Imagen de mundo" className={styles.world} />
          </div>
        </div>
      </main>
    </>
  );
};

export default InitialLanding;
