import * as React from "react";
import styles from "./event.module.css";
import Image from "next/image";

const Event = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.eventText}>
          <h1>Race for a cause</h1>
          <p>
            Aliquip Lorem labore non sunt aute. Excepteur id ex veniam esse
            excepteur et. Laborum eiusmod eu id eu ea voluptate enim occaecat
            elit sint. Sunt ullamco Lorem enim fugiat tempor ea culpa ullamco
            dolore enim. Ea id magna aliqua amet commodo id laborum.
          </p>
          <div>Aug 22</div>
        </div>

        <div className={styles.eventImage}>
          <Image src={"/event3.jpg"} fill alt={""} />
        </div>
        <div className={styles.eventForm}>
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

export default Event;
