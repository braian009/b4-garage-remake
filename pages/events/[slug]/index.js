import * as React from "react";
import styles from "./event.module.css";
import Image from "next/image";
import { eventList } from "@/data/events";

import { getStringFromSlug, getSlugFromString } from "@/utils/slugConverter";





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
      <div className={styles.inner}>
        <div className={styles.eventText}>
          <h1>{event.title}</h1>
          <p>{event.description}
          </p>
          <div>{event.date.month} {event.date.day}</div>
        </div>

        <div className={styles.eventImage}>
          <Image src={event.image} fill alt={""} />
        </div>
        <div className={styles.eventForm}>
          <div>
            <h4>Do you wanna be part of this or any of our events?</h4>
            <p>fill the form below for full details:</p>
          </div>
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
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export { getStaticPaths, getStaticProps };
export default Event;
