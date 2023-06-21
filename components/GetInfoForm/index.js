import * as React from "react";
import styles from "./getInfoForm.module.css";

import { motion } from "framer-motion";

const GetInfoForm = () => {
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
    <div className={styles.formContainer}>
      <p>Get notified about new upcoming events!</p>
      <form>
        <input
          value={email}
          onChange={handleInputChange}
          type="text"
          placeholder="your email"
        ></input>
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
          Submit
        </motion.button>
      </form>
    </div>
  );
};

export default GetInfoForm;
