import * as React from "react";
import styles from "./insight.module.css";

import { motion } from "framer-motion";

const InsightCard = ({ header, body }) => {
  return (
    <motion.div className={styles.insightContainer}
    
    initial={{ opacity: 0, scale: 0.85 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{
      delay: 0.4,
      duration: 0.4,
      type: "spring",
      stiffness: 400,
      damping: 75,
    }}>
      <h4>{header}</h4>
      <h4>{body}</h4>
    </motion.div>
  );
};

export default InsightCard;
