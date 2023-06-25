import * as React from "react";
import styles from "./eventCard.module.css";

import Image from "next/image";
import { motion } from "framer-motion";

import ArrowRight from "../varied/Icons/ArrowRight";

import { useRouter } from "next/router";
import { getSlugFromString} from "@/utils/slugConverter";

const EventCard = ({ title, date, image }) => {
  const router = useRouter();
  return (
    <motion.div
      className={styles.cardContainer}
      onClick={() => router.push(`/events/${getSlugFromString(title)}`)}
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 1 }}
    >
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
          <ArrowRight />
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;
