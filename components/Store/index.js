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
              <div>shop this product</div>
              <div>
                <svg
                  fill="#000000"
                  width="800px"
                  height="800px"
                  viewBox="0 0 1920 1920"
                >
                  <g fillRule="evenodd">
                    <path d="M0 176.142 176.13.012l960.12 960.119L176.13 1920 0 1743.87l783.864-783.739L0 176.142Z" />
                    <path d="M784 176.142 960.13.012l960.12 960.119L960.13 1920 784 1743.87l783.86-783.739L784 176.142Z" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className={styles.storeCard}>
            <div className={styles.storeCardImage}>
              <Image src={"/wheel.jpg"} fill alt={""} />
            </div>
            <div className={styles.storeCardFooter}>
              <div>shop this product</div>
              <div>
                <svg
                  fill="#000000"
                  width="800px"
                  height="800px"
                  viewBox="0 0 1920 1920"
                >
                  <g fillRule="evenodd">
                    <path d="M0 176.142 176.13.012l960.12 960.119L176.13 1920 0 1743.87l783.864-783.739L0 176.142Z" />
                    <path d="M784 176.142 960.13.012l960.12 960.119L960.13 1920 784 1743.87l783.86-783.739L784 176.142Z" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className={styles.storeCard}>
            <div className={styles.storeCardImage}>
              <Image src={"/oil.jpg"} fill alt={""} />
            </div>
            <div className={styles.storeCardFooter}>
              <div>shop this product</div>
              <div>
                <svg
                  fill="#000000"
                  width="800px"
                  height="800px"
                  viewBox="0 0 1920 1920"
                >
                  <g fillRule="evenodd">
                    <path d="M0 176.142 176.13.012l960.12 960.119L176.13 1920 0 1743.87l783.864-783.739L0 176.142Z" />
                    <path d="M784 176.142 960.13.012l960.12 960.119L960.13 1920 784 1743.87l783.86-783.739L784 176.142Z" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
