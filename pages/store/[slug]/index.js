import * as React from "react";
import styles from "./product.module.css";
import Image from "next/image";
import LegendText from "@/components/varied/LegendText";


const Product = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.storeText}>
          <h1>B4&apos;s Store</h1>
          <LegendText text='Wheels'/>
        </div>
        <div className={styles.itemDetailsCard}>
          <div className={styles.productImage}>
            <Image src="/tirewheelll.png" fill alt={""} />
          </div>
          <div className={styles.productInfo}>
            <div className={styles.infoHeader}>
              <h4>Some title</h4>
            </div>
            <p>
              Minim laboris elit dolor enim. Lorem aliqua quis adipisicing sunt
              incididunt tempor ullamco excepteur officia ex in consectetur ut
              irure.
            </p>
            <div className={styles.infoFooter}>
              <p>$44.44</p>
              <div className={styles.cartButton}>Add to cart</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
