import * as React from "react";
import styles from "./release.module.css";

import Image from "next/image";
import { motion } from "framer-motion";

import CardWithCTA from "../varied/CardWithCTA";
import ProExhaustLogo from "../varied/Icons/ProExhaustIcon";

const Release = () => {
  return (
    <section className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.releaseInfo}>
          <motion.div
            initial={{ opacity: 1, y: 100, scale: 2 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 1.2,
              duration: 0.4,
              type: "spring",
              stiffness: 400,
              damping: 75,
            }}
          >
            <ProExhaustLogo />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 1.6,
              duration: 0.4,
              type: "spring",
              stiffness: 400,
              damping: 75,
            }}
          >
            <CardWithCTA />
          </motion.div>
        </div>
        <div className={styles.releaseImage}>
          <Image src="/proexhaust.jpg" fill alt={""} />
        </div>
      </div>
    </section>
  );
};

export default Release;
