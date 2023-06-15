import * as React from "react";
import styles from "./checkout.module.css";

const Checkout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <h1>Checkout</h1>
        <div className={styles.checkoutCard}>
          <h4>
            Exercitation nisi mollit laborum sit do sunt eu. Sunt culpa
            excepteur ex cillum do non.
          </h4>
          <div>Got it!</div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
