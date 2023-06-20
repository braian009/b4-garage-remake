import * as React from "react";
import styles from "./card.module.css";

import { motion } from "framer-motion";

const CardWithCTA = () => {
  return (
    <div className={styles.cardContainer}>
      <h4>some title of some kind</h4>
      <p>
        Enim duis quis Lorem elit irure non fugiat. Ad proident enim eiusmod
        laboris dolor nisi laboris ea pariatur magna veniam labore labore.
        Labore mollit est nisi labore eu est quis incididunt ullamco proident
        ullamco voluptate deserunt sit. Deserunt sint ex magna eiusmod nostrud
        sunt eiusmod veniam.
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
      >
        Call to action
      </motion.button>
    </div>
  );
};

export default CardWithCTA;
