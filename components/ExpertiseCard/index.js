import * as React from "react";
import styles from "./expertiseCard.module.css";

import { motion } from "framer-motion";

import Image from "next/image";

const ExpertiseCard = ({ item }) => {
  return (
    <div className={styles.expertiseCard}>
      <motion.div className={styles.cardOverlay}
        initial={{ opacity: 0.4 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.4,
          duration: 0.4,
          type: "spring",
          stiffness: 400,
          damping: 75,
        }}
      ></motion.div>
      <div className={styles.cardImage}>
        <Image src={item.image} fill alt={""} />
      </div>
      <motion.div
        className={styles.cardText}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.8,
          duration: 0.4,
          type: "spring",
          stiffness: 400,
          damping: 75,
        }}
      >
        <h4>
          <svg viewBox="0 0 24 24" fill="none">
            <g strokeWidth="0"></g>
            <g strokeLinecap="round" strokeLinejoin="round"></g>
            <g i>
              <path
                d="M12 3C12 7.97056 16.0294 12 21 12C16.0294 12 12 16.0294 12 21C12 16.0294 7.97056 12 3 12C7.97056 12 12 7.97056 12 3Z"
                stroke="#e84f30"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
          {item.title}
        </h4>
        <p>{item.text}</p>
        <motion.button
          whileHover={{
            backgroundColor: "#e25336",
            color: "#e0e0e0",
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
        >
          call to action
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ExpertiseCard;
