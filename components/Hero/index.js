import * as React from "react";
import styles from "./hero.module.css";
import { bebasNeue } from "@/styles/fonts";

import Image from "next/image";
import { motion } from "framer-motion";

import TwitterIcon from "../varied/Icons/TwitterIcon";
import InstagramIcon from "../varied/Icons/InstagramIcon";
import Slogan from "../varied/LegendText";
import LegendText from "../varied/LegendText";

import { useRouter } from "next/router";

const Hero = () => {
  const router = useRouter();
  return (
    <section className={styles.container}>
      <Image src={"/herobg.jpg"} fill alt={""}></Image>
      <div className={styles.heroOverlay}></div>

      <motion.div
        className={styles.inner}
        initial={{ opacity: 0, scale: 1.4 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.4,
          duration: 0.4,
          type: "spring",
          stiffness: 400,
          damping: 75,
        }}
      >
        <div className={styles.heroText}>
          <h1 className={bebasNeue.className}>Unleash it</h1>

          <p>with unparalleled quality and reliability.</p>
          <motion.button
            className={styles.ctaButton}
            whileHover={{
              backgroundColor: "#1f1f1f",
              color: "#eb6347",
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            onClick={() => router.push("/store/wheels")}
          >
            Shop now
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
          <Slogan text="your vision, our expertise." />
        </div>
        <div className={styles.lastJob}>
          <LegendText text="Supra" />
          <p>
            One of our <a>latest jobs</a>, pushing boundaries with upgraded
            power, speed, and agility.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
