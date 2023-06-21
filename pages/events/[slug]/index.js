import * as React from "react";
import styles from "./event.module.css";

import Image from "next/image";
import { motion } from "framer-motion";
import LegendText from "@/components/varied/LegendText";

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
        <div className={styles.eventForm}>
          <p>Get info on how to be part of B4&apos;s events!</p>

          <form>
            <div>
              <label htmlFor="fullname">Full Name:</label>
              <input id="fullname" type="text"></input>
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input id="email" type="text"></input>
            </div>
            <div>
              <label htmlFor="phone">Phone Number:</label>

              <input id="phone" type="text"></input>
            </div>
            <motion.button
              type="submit"
              whileHover={{
                backgroundColor: "#1f1f1f",
                color: "#eb6347",
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            >
              Submit
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export { getStaticPaths, getStaticProps };
export default Event;
