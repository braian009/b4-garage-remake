import * as React from "react";
import styles from "./contact.module.css";
import InstagramIcon from "../varied/Icons/InstagramIcon";
import FacebookIcon from "../varied/Icons/FacebookIcon";
import TwitterIcon from "../varied/Icons/TwitterIcon";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        {/* <h1>Contact</h1> */}
        <div className={styles.newsletter}>
          <div>Suscribe to our newsletter:</div>
          <form>
            <input id="email" type="text"></input>
            <button type="submit">Suscribe</button>
          </form>
        </div>
        <div className={styles.socials}>
          <div>Follow B4 on:</div>
          <ul className={styles.socialsList}>
            <li>
              <InstagramIcon />
            </li>
            <li>
              <FacebookIcon />
            </li>
            <li>
              <TwitterIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
