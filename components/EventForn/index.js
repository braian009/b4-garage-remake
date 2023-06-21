import * as React from "react";
import styles from "./eventForm.module.css";

import { motion } from "framer-motion";

const EventForm = () => {
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNum, setPhoneNum] = React.useState("");

  const handleNameChange = (e) => {
    setFullName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleNumChange = (e) => {
    setPhoneNum(e.target.value);
  };

  const handleSubmit = (e) => {
    const areFilled = fullName && email && phoneNum;
    e.preventDefault();

    if (areFilled) {
      setEmail("");
      setFullName("");
      setPhoneNum("");
    }
  };

  return (
    <div className={styles.formContainer}>
      <p>Get info on how to be part of B4&apos;s events!</p>

      <form>
        <div>
          <label htmlFor="fullname">Full Name:</label>
          <input
            id="fullname"
            onChange={handleNameChange}
            value={fullName}
            type="text"
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            onChange={handleEmailChange}
            value={email}
            type="text"
          ></input>
        </div>
        <div>
          <label htmlFor="phone">Phone Number:</label>

          <input
            id="phone"
            onChange={handleNumChange}
            value={phoneNum}
            type="text"
          ></input>
        </div>
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

export default EventForm;
