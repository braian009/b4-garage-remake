import * as React from "react";
import styles from "./events.module.css";

import GetInfoForm from "@/components/GetInfoForm";
import EventCard from "@/components/EventCard";
import Slogan from "@/components/varied/LegendText";

import { eventList } from "@/data/events";

const Events = ({}) => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.eventsText}>
          <h1>Events</h1>
          <p>
            Ipsum eiusmod quis enim duis minim excepteur ea pariatur incididunt
            Lorem. Sunt culpa minim adipisicing excepteur do id id in minim quis
            incididunt laboris incididunt. Consequat non magna quis quis sunt
            tempor in.
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
      </div>
    </div>
  );
};

export default Events;
