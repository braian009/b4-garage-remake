import * as React from "react";
import styles from "./getInfoForm.module.css";

const GetInfoForm = () => {
  return (
    <div className={styles.formContainer}>
      <p>
        Get notified about new upcoming events!
      </p>
      <form>
        <input type="text" placeholder="your email"></input>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default GetInfoForm;
