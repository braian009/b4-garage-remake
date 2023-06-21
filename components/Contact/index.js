import * as React from "react";
import styles from "./contact.module.css";

import { motion } from "framer-motion";
import InstagramIcon from "../varied/Icons/InstagramIcon";
import FacebookIcon from "../varied/Icons/FacebookIcon";
import TwitterIcon from "../varied/Icons/TwitterIcon";

const Contact = () => {
  const [email, setEmail] = React.useState("");
  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    const isFilled = email ? true : false;
    e.preventDefault();

    if (isFilled) {
      setEmail("");
    }
  };
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
            <input id="email" value={email} onChange={handleInputChange} type="text"></input>
            <motion.button
              onClick={handleSubmit}
              whileHover={{
                backgroundColor: "#1f1f1f",
                color: "#eb6347",
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            >
              Suscribe
            </motion.button>
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
