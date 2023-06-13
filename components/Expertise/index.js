import * as React from "react";
import styles from "./expertise.module.css";
import Image from "next/image";

const Expertise = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.expertiseCards}>
          <div className={styles.expertiseCard}>
            <div className={styles.cardImage}>
              <Image src="/expertise4.jpg" fill alt={""} />
            </div>
            <div className={styles.cardText}>
              <h4>some title of some kind</h4>
              <p>
                Nisi qui consectetur minim enim sint nisi sunt ex eiusmod.
                Cupidatat ex proident mollit cillum duis aliquip sit minim
                consequat id sint.
              </p>
              <button></button>
            </div>
          </div>
          <div className={styles.expertiseCard}>
            <div className={styles.cardImage}>
              <Image src="/expertise3.jpg" fill alt={""} />
            </div>
            <div className={styles.cardText}>
              <h4>some title of some kind</h4>

              <p>
                Nisi qui consectetur minim enim sint nisi sunt ex eiusmod.
                Cupidatat ex proident mollit cillum duis aliquip sit minim
                consequat id sint.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
