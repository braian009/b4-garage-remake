import * as React from "react";
import styles from "./hero.module.css";

import Image from "next/image";

import { motion } from "framer-motion";

import TwitterIcon from "../varied/Icons/TwitterIcon";
import InstagramIcon from "../varied/Icons/InstagramIcon";
import Slogan from "../varied/LegendText";
import LegendText from "../varied/LegendText";

const Hero = () => {
  return (
    <div className={styles.container}>
      <Image src={"/toyotasupra.jpg"} fill alt={""}></Image>
      <div className={styles.heroOverlay}></div>

      <motion.div
        className={styles.inner}
        initial={{ opacity: 0, scale: 1.4 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.4,
          duration: 0.4,
          type: "spring",
          stiffness: 400,
          damping: 75,
        }}
      >
        <div className={styles.heroText}>
          <h1>
            <span>Unleash</span> it
          </h1>

          <p>Culpa sint dolor enim non sit minim veniam.</p>
          <motion.button
            className={styles.ctaButton}
            whileHover={{
              backgroundColor: "#1f1f1f",
              color: "#eb6347",
            }}
            transition={{
              duration: 0.3,
              ease: 'easeOut'
            }}
          >
            Order Now
          </motion.button>
        </div>
        <div className={styles.socials}>
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
      </motion.div>
    </div>
  );
};

export default Hero;
