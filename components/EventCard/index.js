import * as React from "react";
import styles from "./eventCard.module.css";

const EventCard = ({ title, description, date }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardDate}>
        <div>{date.month}</div>
        <div>{date.day}</div>
      </div>
      <div className={styles.cardInfo}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default EventCard;
