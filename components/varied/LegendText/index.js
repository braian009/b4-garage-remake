import * as React from "react";
import LineDecoration from "./LineDecoration";
import styles from './legendText.module.css'

const LegendText = ({text, color}) => {
  return (
    <div className={styles.legendContainer}>
      <h4 style={{color: `${color ? color : '#727272'}`}}>
        <LineDecoration
          width={"100vw"}
          height={'1px'}
          top={"50%"}
          right={"105%"}
          translateY={"-50%"}
          backgroundColor={`${color ? color : "#727272"}`}
          opacity={'0.5'}
        />
        {text}
        <LineDecoration
          width={"100vw"}
          height={'1px'}
          top={"50%"}
          left={"105%"}
          translateY={"-50%"}
          backgroundColor={`${color ? color : "#727272"}`}
          opacity={'0.5'}
        />
      </h4>
    </div>
  );
};

export default LegendText;
