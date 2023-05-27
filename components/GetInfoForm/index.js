import * as React from "react";
import styles from "./getInfoForm.module.css";

const GetInfoForm = () => {
  return (
    <div className={styles.formContainer}>
      <p>
        wanna participate in some of these events? we&apos;ll email you the
        details!
      </p>
      <form>
        <input type="text" placeholder="your email"></input>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default GetInfoForm;
