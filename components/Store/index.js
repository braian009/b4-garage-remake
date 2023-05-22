import * as React from "react";
import styles from "./store.module.css";
import Image from "next/image";

const Store = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <h1>Store</h1>
        <div className={styles.storeCards}>
          <div className={styles.storeCard}>
            <div className={styles.storeCardImage}>
              <Image src={"/spoiler.jpg"} fill alt={""} />
            </div>
            <div className={styles.storeCardFooter}>
              <button>shop this product</button>
            </div>
          </div>
          <div className={styles.storeCard}>
            <div className={styles.storeCardImage}>
              <Image src={"/wheel.jpg"} fill alt={""} />
            </div>
            <div className={styles.storeCardFooter}>
              <button>shop this product</button>
            </div>
          </div>
          <div className={styles.storeCard}>
            <div className={styles.storeCardImage}>
              <Image src={"/oil.jpg"} fill alt={""} />
            </div>
            <div className={styles.storeCardFooter}>
              <button>shop this product</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
