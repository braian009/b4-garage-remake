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
              <h4>
                <svg viewBox="0 0 24 24" fill="none">
                  <g strokeWidth="0"></g>
                  <g strokeLinecap="round" strokeLinejoin="round"></g>
                  <g i>
                    <path
                      d="M12 3C12 7.97056 16.0294 12 21 12C16.0294 12 12 16.0294 12 21C12 16.0294 7.97056 12 3 12C7.97056 12 12 7.97056 12 3Z"
                      stroke="#e84f30"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
                some title of some kind
              </h4>
              <p>
                Nisi qui consectetur minim enim sint nisi sunt ex eiusmod.
                Cupidatat ex proident mollit cillum duis aliquip sit minim
                consequat id sint.
              </p>
              <button>call to action</button>
            </div>
          </div>
          <div className={styles.expertiseCard}>
            <div className={styles.cardImage}>
              <Image src="/expertise3.jpg" fill alt={""} />
            </div>
            <div className={styles.cardText}>
              <h4>
                <svg viewBox="0 0 24 24" fill="none">
                  <g strokeWidth="0"></g>
                  <g strokeLinecap="round" strokeLinejoin="round"></g>
                  <g i>
                    <path
                      d="M12 3C12 7.97056 16.0294 12 21 12C16.0294 12 12 16.0294 12 21C12 16.0294 7.97056 12 3 12C7.97056 12 12 7.97056 12 3Z"
                      stroke="#e84f30"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
                some title of some kind
              </h4>

              <p>
                Nisi qui consectetur minim enim sint nisi sunt ex eiusmod.
                Cupidatat ex proident mollit cillum duis aliquip sit minim
                consequat id sint.
              </p>
              <button>call to action</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
