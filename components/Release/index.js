import * as React from "react";
import CardWithCTA from "./CardWithCTA";
import Image from "next/image";
import ProExhaustLogo from "./ProExhaustLogo";
import styles from "./release.module.css";

const Release = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.releaseInfo}>
          <ProExhaustLogo />
          <CardWithCTA />
        </div>
        <div className={styles.releaseImage}>
          <Image src="/proexhaust.jpg" fill alt={""} />
        </div>
      </div>
    </div>
  );
};

export default Release;
