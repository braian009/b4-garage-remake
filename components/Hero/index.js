import * as React from "react";
import styles from "./hero.module.css";
import Image from "next/image";
import TwitterIcon from "../varied/Icons/TwitterIcon";
import InstagramIcon from "../varied/Icons/InstagramIcon";
import Slogan from "../varied/LegendText";
import LegendText from "../varied/LegendText";

const Hero = () => {
  return (
    <div className={styles.container}>
      <Image src={"/toyotasupra.jpg"} fill alt={""}></Image>
      <div className={styles.heroOverlay}></div>

      <div className={styles.inner}>
        <div className={styles.heroText}>
          <h1>
            <span>Unleash</span> it
          </h1>

          <p>Culpa sint dolor enim non sit minim veniam.</p>
          <button className={styles.ctaButton}>Order Now</button>
        </div>
        <div className={styles.buttons}>
          <ul>
            <li>
              <InstagramIcon />
            </li>
            <li>
              <TwitterIcon />
            </li>
          </ul>
        </div>
        <div className={styles.slogan}>
          <Slogan text="architects of style and design" />
        </div>
        <div className={styles.lastJob}>
          <LegendText text="Supra" />
          <p>
            One of our <a> latest jobs </a> Magna non deserunt voluptate
            consequat deserunt nostrud excepteur mollit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
