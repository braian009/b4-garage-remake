import * as React from "react";
import styles from "./hero.module.css";
import Image from "next/image";
import CtaButtonGroup from "./CtaButtonGroup";
import Slogan from "./Slogan";

const Hero = () => {
  return (
    <div className={styles.container}>
      <Image src={"/herobg.jpg"} fill alt={""}></Image>
      <div className={styles.heroOverlay}></div>

      <div className={styles.inner}>
        <div className={styles.heroText}>
          <h1>
            <span>Unleash</span> the power
          </h1>

          <p>
            Culpa sint dolor enim non sit minim veniam.Dolore tempor duis
            consequat Lorem ex adipisicing est.
          </p>
          <button className={styles.ctaButton}>Order Now</button>
        </div>
        <div className={styles.buttons}>
          <CtaButtonGroup />
        </div>
        <div className={styles.slogan}>
          <Slogan />
        </div>
      </div>
    </div>
  );
};

export default Hero;
