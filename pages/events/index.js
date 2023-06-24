import * as React from "react";
import styles from "./events.module.css";

import { motion } from "framer-motion";
import GetInfoForm from "@/components/GetInfoForm";
import EventCard from "@/components/EventCard";
import Slogan from "@/components/varied/LegendText";
import GoBackButton from "@/components/varied/GoBackButton";

import { eventList } from "@/data/events";

const Events = ({}) => {
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
        <GoBackButton />
        <div className={styles.eventsText}>
          <h1>Events</h1>
          <p>
            Welcome to our Events page! Explore our exciting lineup of
            automotive gatherings and competitions. Join fellow
            enthusiasts and immerse yourself in the world of cars, speed, and
            adrenaline. Stay tuned for upcoming events and mark your calendars
            for an unforgettable experience.
          </p>
        </div>
        <div className={styles.eventsCards}>
          <Slogan text="upcoming events" />

          {eventList.map((event) => {
            return (
              <EventCard
                key={`event-${event.id}`}
                title={event.title}
                description={event.description}
                date={event.date}
                image={event.image}
              />
            );
          })}
        </div>
        <div className={styles.eventsForm}>
          <GetInfoForm />
        </div>
      </motion.div>
    </div>
  );
};

export default Events;
