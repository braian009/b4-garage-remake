import * as React from "react";
import Image from "next/image";
import Slogan from "@/components/Hero/Slogan";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.aboutText}>
          <h1>About us</h1>
          <p>
            Minim aliquip sint qui laboris quis aliquip pariatur excepteur.
            Eiusmod dolore exercitation incididunt Lorem cupidatat cupidatat.
            Culpa adipisicing nostrud incididunt dolor. Enim in id sunt
            exercitation. Non dolor cillum irure excepteur amet laboris nostrud
            esse aliqua. Aliqua et do laborum mollit Lorem. Tempor nulla labore
            occaecat non nostrud tempor non.
          </p>
        </div>
        <div className={styles.aboutImage}>
          <Image src="/aboutimage.jpg" fill alt={""} />
        </div>
        <div className={styles.aboutCards}>
          <Slogan />
          <div className={styles.aboutCard}>
            <h4>year founded</h4> <h4>2011</h4>{" "}
          </div>
          <div className={styles.aboutCard}>
            <h4>team members</h4> <h4>41</h4>
          </div>
          <div className={styles.aboutCard}>
            <h4>satisfied owners</h4> <h4>444+</h4>
          </div>
          <div className={styles.aboutCard}>
            <h4>Events</h4> <h4>27+</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
