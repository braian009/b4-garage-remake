import * as React from "react";
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div>
          Developed by <b>Braian Yanquín</b>
        </div>
      </div>
    </div>
  );
};

export default Footer;
