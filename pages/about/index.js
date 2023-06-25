import * as React from "react";
import styles from "./about.module.css";
import { bebasNeue } from "@/styles/fonts";

import Image from "next/image";
import { motion } from "framer-motion";

import InsightCard from "@/components/InsightCard";
import LegendText from "@/components/varied/LegendText";
import GoBackButton from "@/components/varied/GoBackButton";
import ShieldIcon from "@/components/varied/Icons/Shieldicon";
import OnTargetIcon from "@/components/varied/Icons/OnTargetIcon";
import RibbonIcon from "@/components/varied/Icons/RibbonIcon";

import { insightList } from "@/data/insights";

const About = () => {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.inner}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.6,
          duration: 0.4,
          type: "spring",
          stiffness: 400,
          damping: 75,
        }}
      >
        <GoBackButton />
        <div className={styles.aboutText}>
          <h1 className={bebasNeue.className}>About us</h1>
          <p>
            Our garage was founded with the mission of offering top-notch car
            modification and repair services. The founder, a true car
            enthusiast, wanted to create a space where drivers could bring their
            vehicles to receive the best care possible.
          </p>
        </div>
        <div className={styles.aboutImage}>
          <Image src="/aboutimage.jpg" fill alt={""} />
        </div>

        <div className={styles.aboutValues}>
          <div className={styles.valuesCard}>
            <div>
              <OnTargetIcon />
            </div>
            <p>
              We believe in the power of details. From the smallest
              customizations to grand transformations, we meticulously craft
              your vision into reality, exceeding expectations every time.
            </p>
          </div>
          <div className={styles.valuesCard}>
            <div>
              <ShieldIcon />
            </div>
            <p>
              We prioritize your safety and bring years of expertise to every
              project. Our skilled team ensures that your vehicle receives the
              highest level of care and precision.
            </p>
          </div>

          <div className={styles.valuesCard}>
            <div>
              <RibbonIcon />
            </div>
            <p>
              We take pride in our strong bond with the community. Our garage is
              trusted for its exceptional service and unwavering dedication to
              customer satisfaction.
            </p>
          </div>
        </div>
        <div className={styles.insightCards}>
          <LegendText text="Some insights:" />

          {insightList.map((item) => {
            return (
              <InsightCard
                key={`insightCard-${item.id}`}
                header={item.title}
                body={item.body}
              />
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
