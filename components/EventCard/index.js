import * as React from "react";
import Image from "next/image";
import styles from "./eventCard.module.css";

const EventCard = ({ title, description, date, image }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardDate}>
        <div>{date.month}</div>
        <div>{date.day}</div>
      </div>
      <div className={styles.cardImage}><Image src={image} alt={''} fill/></div>
      <div className={styles.cardInfo}>
        <h4>{title}</h4>
      </div>
    </div>
  );
};

export default EventCard;
