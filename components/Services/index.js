import * as React from "react";
import styles from './services.module.css'

const Services = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.serviceCard}>
          <h2>some title</h2>
          <p>
            Nostrud ea adipisicing mollit amet consequat quis aute cupidatat
            duis nisi ipsum non. Reprehenderit exercitation est aliquip deserunt
            veniam ex qui elit et amet aliqua nostrud excepteur. Eu cupidatat
            sit irure fugiat amet proident officia velit qui culpa tempor
            tempor.
          </p>
        </div>
        <div className={styles.serviceCard}>
          <h2>some title</h2>
          <p>
            Nostrud ea adipisicing mollit amet consequat quis aute cupidatat
            duis nisi ipsum non. Reprehenderit exercitation est aliquip deserunt
            veniam ex qui elit et amet aliqua nostrud excepteur. Eu cupidatat
            sit irure fugiat amet proident officia velit qui culpa tempor
            tempor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
