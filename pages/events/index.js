import * as React from "react";
import Image from "next/image";
import styles from "./events.module.css";
import { eventList } from "@/data/events";
import EventCard from "@/components/EventCard";
import GetInfoForm from "@/components/GetInfoForm";

const Events = ({}) => {
  return (
    <div className={styles.container}>
      <Image src={"/eventsbg.jpg"} alt={""} fill />
      <div className={styles.eventsOverlay}></div>

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
        <div className={styles.eventsForm}>
          <GetInfoForm />
        </div>
      </div>
    </div>
  );
};

export default Events;
