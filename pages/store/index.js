import * as React from "react";
import styles from "./store.module.css";

import StoreCard from "@/components/StoreCard";
import { motion } from "framer-motion";

import { productTypes } from "@/data/store";

const Store = () => {
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
        <h1>B4&apos;s Store</h1>
        <div className={styles.storeCards}>
          {productTypes.map((type) => {
            return <StoreCard key={`storeCard-${type}`} productType={type} />;
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default Store;
