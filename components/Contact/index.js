import * as React from "react";
import styles from "./contact.module.css";

import { motion } from "framer-motion";
import InstagramIcon from "../varied/Icons/InstagramIcon";
import FacebookIcon from "../varied/Icons/FacebookIcon";
import TwitterIcon from "../varied/Icons/TwitterIcon";

const Contact = () => {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.inner}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.4,
          duration: 0.4,
          type: "spring",
          stiffness: 400,
          damping: 75,
        }}
      >
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
      </motion.div>
    </div>
  );
};

export default Contact;
