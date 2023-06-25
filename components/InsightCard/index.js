import * as React from "react";
import styles from "./insightCard.module.css";

const InsightCard = ({ header, body }) => {
  return (
    <div className={styles.insightContainer}>
      <h4>{header}</h4>
      <h4>{body}</h4>
    </div>
  );
};

export default InsightCard;
