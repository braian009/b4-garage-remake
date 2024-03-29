import * as React from "react";
import styles from "./expertise.module.css";

import { motion } from "framer-motion";

import ExpertiseCard from "../ExpertiseCard";
import { expertiseList } from "@/data/expertise";

const Expertise = () => {
  return (
    <section className={styles.container}>
      <div className={styles.inner}>
        <motion.div
          className={styles.expertiseCards}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.4,
            duration: 0.2,
            type: "spring",
            stiffness: 400,
            damping: 75,
          }}
        >
          {expertiseList.map((item) => {
            return (
              <ExpertiseCard key={`expertiseCard-${item.id}`} item={item} />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;
