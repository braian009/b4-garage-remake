import * as React from "react";
import styles from "./about.module.css";

import Image from "next/image";

import { motion } from "framer-motion";
import InsightCard from "@/components/InsightCard";
import GoBackButton from "@/components/varied/GoBackButton";

import { insightList } from "@/data/insights";
import LegendText from "@/components/varied/LegendText";

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
        <GoBackButton />
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

        <div className={styles.aboutValues}>
          <h2> some title</h2>

          <p>
            Eiusmod id do incididunt fugiat culpa enim et consequat nulla id
            Lorem. Aliquip culpa elit non et ut occaecat non et reprehenderit
            exercitation ea excepteur. Commodo pariatur aliqua quis elit nostrud
            veniam dolore non ut mollit aliqua adipisicing.
          </p>
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
