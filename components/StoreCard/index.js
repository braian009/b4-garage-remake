import * as React from "react";
import styles from "./storeCard.module.css";

import Image from "next/image";
import { motion } from "framer-motion";

import ArrowRight from "../varied/Icons/ArrowRight";

import { useRouter } from "next/router";
import { getSlugFromString } from "@/utils/slugConverter";

const StoreCard = ({ productType }) => {
  const router = useRouter();
  const imageName = productType.toLowerCase().replace(/\s+/g, "");

  return (
    <motion.div
      className={styles.container}
      onClick={() => router.push(`/store/${getSlugFromString(productType)}`)}
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 1 }}
    >
      <div className={styles.storeCardImage}>
        <Image src={`/${imageName}.jpg`} fill alt={""} />
      </div>
      <div className={styles.storeCardFooter}>
        <h4>Shop {productType}</h4>
        <div>
          <ArrowRight/>
        </div>
      </div>
    </motion.div>
  );
};

export default StoreCard;
