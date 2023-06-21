import * as React from "react";
import styles from "./about.module.css";

import Image from "next/image";

import { motion } from "framer-motion";
import Slogan from "@/components/varied/LegendText";
import InsightCard from "@/components/InsightCard";

import { insightList } from "@/data/insights";

const About = () => {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.inner}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.6,
          duration: 0.4,
          type: "spring",
          stiffness: 400,
          damping: 75,
        }}
      >
        <div className={styles.aboutText}>
          <h1>About us</h1>
          <p>
            Minim aliquip sint qui laboris quis aliquip pariatur excepteur.
            Eiusmod dolore exercitation incididunt Lorem cupidatat cupidatat.
            Culpa adipisicing nostrud incididunt dolor. Enim in id sunt
            exercitation.
          </p>
        </div>
        <div className={styles.aboutImage}>
          <Image src="/aboutimage.jpg" fill alt={""} />
        </div>
        <div className={styles.insightCards}>
          <motion.div
            initial={{ opacity: 0, scale: 1.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.4,
              duration: 0.4,
              type: "spring",
              stiffness: 400,
              damping: 75,
            }}
          >
            <Slogan text="Some insights:" />
          </motion.div>
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
