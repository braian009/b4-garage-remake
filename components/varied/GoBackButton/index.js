import * as React from "react";
import styles from './button.module.css';
import { useRouter } from "next/router";
import ArrowLeft from "../Icons/ArrowLeft";

const GoBackButton = () => {
  const router = useRouter();
  return (
    <div className={styles.container} onClick={() => router.back()}>
      <ArrowLeft />
    </div>
  );
};

export default GoBackButton;
