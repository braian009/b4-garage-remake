import * as React from "react";
import styles from "./store.module.css";

import StoreCard from "@/components/StoreCard";

import { productTypes } from "@/data/store";

const Store = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <h1>B4&apos;s Store</h1>
        <div className={styles.storeCards}>
          {productTypes.map((type) => {
            return <StoreCard key={`storeCard-${type}`} productType={type} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Store;
