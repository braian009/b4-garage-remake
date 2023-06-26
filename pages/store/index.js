import * as React from "react";
import styles from "./store.module.css";
import { bebasNeue } from "@/styles/fonts";

import { motion } from "framer-motion";

import StoreHead from "@/components/varied/PageHeads/StoreHead";
import StoreCard from "@/components/StoreCard";
import GoBackButton from "@/components/varied/GoBackButton";

import { productTypes } from "@/data/store";

const StorePage = () => {
  return (
    <>
      <StoreHead />

      <div className={styles.container}>
        <motion.div
          className={styles.inner}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.6,
            duration: 0.4,
            type: "spring",
            stiffness: 400,
            damping: 75,
          }}
        >
          <GoBackButton />
          <h1 className={bebasNeue.className}>B4&apos;s Store</h1>
          <div className={styles.storeCards}>
            {productTypes.map((type) => {
              return <StoreCard key={`storeCard-${type}`} productType={type} />;
            })}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default StorePage;
