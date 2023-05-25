import * as React from "react";
import styles from "./events.module.css";
import { eventList } from "@/data/events";
import EventCard from "@/components/EventCard";

const Events = ({}) => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <h1>Events</h1>
        <div className={styles.eventCards}>
          {eventList.map((event) => {
            return (
              <EventCard
                key={`event-${event.id}`}
                title={event.title}
                description={event.description}
                date={event.date}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Events;
