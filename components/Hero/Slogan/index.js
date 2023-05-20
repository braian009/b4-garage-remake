import * as React from "react";
import LineDecoration from "./LineDecoration";
import styles from './slogan.module.css'

const Slogan = () => {
  return (
    <div className={styles.sloganContainer}>
      <h4>
        <LineDecoration
          width={"100vw"}
          height={'1px'}
          top={"50%"}
          right={"105%"}
          translateY={"-50%"}
          backgroundColor={"white"}
          opacity={'0.2'}
        />
        some slogan of some kind
        <LineDecoration
          width={"100vw"}
          height={'1px'}
          top={"50%"}
          left={"105%"}
          translateY={"-50%"}
          backgroundColor={"white"}
          opacity={'0.2'}
        />
      </h4>
    </div>
  );
};

export default Slogan;
