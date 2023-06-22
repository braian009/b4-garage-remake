import * as React from "react";
import styles from "./event.module.css";

import Image from "next/image";
import { motion } from "framer-motion";
import EventForm from "@/components/EventForn";
import LegendText from "@/components/varied/LegendText";
import GoBackButton from "@/components/varied/GoBackButton";

import { getStringFromSlug, getSlugFromString } from "@/utils/slugConverter";
import { eventList } from "@/data/events";

const getStaticPaths = () => {
  const paths = eventList.map((event) => ({
    params: {
      slug: getSlugFromString(event.title),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

const getStaticProps = ({ params }) => {
  const { slug } = params;

  return {
    props: {
      event: eventList.find((event) => event.title === getStringFromSlug(slug)),
    },
  };
};

const Event = ({ event }) => {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.inner}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.6,
          duration: 0.4,
          type: "spring",
          stiffness: 400,
          damping: 75,
        }}
      >
        <GoBackButton/>
        <div className={styles.eventText}>
          <h1>{event.title}</h1>
          <p>{event.description}</p>
          <div className={styles.date}>
            <LegendText text={`${event.date.month} ${event.date.day}`} />
          </div>
        </div>

        <div className={styles.eventImage}>
          <Image src={event.image} fill alt={""} />
        </div>
        <EventForm/>
      </motion.div>
    </div>
  );
};

export { getStaticPaths, getStaticProps };
export default Event;
