import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./eventCard.module.css";
import { getSlugFromString } from "@/utils/slugConverter";

const EventCard = ({ title, description, date, image }) => {
  return (
    <Link
      href={`/events/${getSlugFromString(title)}`}
      className={styles.container}
    >
      <div className={styles.cardContainer}>
        <div className={styles.cardDate}>
          <div>{date.month}</div>
          <div>{date.day}</div>
        </div>
        <div className={styles.cardImage}>
          <Image src={image} alt={""} fill />
        </div>
        <div className={styles.cardInfo}>
          <h4>{title}</h4>
          <div>
            <svg
              fill="#000000"
              width="800px"
              height="800px"
              viewBox="0 0 1920 1920"
            >
              <g fillRule="evenodd">
                <path d="M0 176.142 176.13.012l960.12 960.119L176.13 1920 0 1743.87l783.864-783.739L0 176.142Z" />
                <path d="M784 176.142 960.13.012l960.12 960.119L960.13 1920 784 1743.87l783.86-783.739L784 176.142Z" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
