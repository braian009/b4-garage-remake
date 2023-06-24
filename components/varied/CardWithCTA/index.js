import * as React from "react";
import styles from "./card.module.css";

import { motion } from "framer-motion";

import { useRouter } from "next/router";

const CardWithCTA = () => {
  const router = useRouter();

  return (
    <div className={styles.cardContainer}>
      <h4>Performance redefined</h4>
      <p>
        Introducing Pro Exhaust, the pinnacle of automotive performance and
        sound. These meticulously crafted exhaust systems are engineered with
        precision to deliver exhilarating performance, enhanced horsepower,
        improved torque, and a captivating exhaust note. Experience the thrill
        of driving with the unleashed power of Pro Exhaust.
      </p>
      <motion.button
        whileHover={{
          backgroundColor: "#1f1f1f",
          color: "#eb6347",
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        onClick={() => router.push('/store/exhausts')}
      >
        Shop exhausts
      </motion.button>
    </div>
  );
};

export default CardWithCTA;
