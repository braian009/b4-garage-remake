import * as React from "react";
import styles from "./getInfoForm.module.css";

import { motion } from "framer-motion";

const GetInfoForm = () => {
  return (
    <div className={styles.formContainer}>
      <p>Get notified about new upcoming events!</p>
      <form>
        <input type="text" placeholder="your email"></input>
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
  );
};

export default GetInfoForm;
