import * as React from "react";
import CardWithCTA from "../varied/CardWithCTA";
import Image from "next/image";
import ProExhaustLogo from "./ProExhaustLogo";
import styles from "./release.module.css";
import { motion } from "framer-motion";

const Release = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.releaseInfo}>
          <motion.div
            initial={{ opacity: 1, y: 100, scale: 2 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
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
    </div>
  );
};

export default Release;
