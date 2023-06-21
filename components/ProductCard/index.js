import * as React from "react";
import styles from "./productCard.module.css";

import Image from "next/image";
import { motion } from "framer-motion";

import { useRouter } from "next/router";
import { getSlugFromString } from "@/utils/slugConverter";

const ProductCard = ({ item }) => {
  const router = useRouter();

  return (
    <motion.div
      key={`product-${item.id}`}
      className={styles.container}
      whileHover={{
        scale: 1.025,
        boxShadow: '2px 2px 6px #eb6347'
      }}
    >
      <div className={styles.cardImage}>
        <Image src={item.image} fill alt={""} />
      </div>
      <div className={styles.cardText}>
        <h4>{item.name}</h4>
        <div>{item.features}</div>
        <p>${Number(item.price).toFixed(2)}</p>
        <motion.button
          onClick={() => {
            router.push({
              pathname: "/store/[type]/[item]",
              query: {
                type: getSlugFromString(item.type),
                item: getSlugFromString(item.name),
              },
            });
          }}
          whileHover={{
            backgroundColor: "#1f1f1f",
            color: "#eb6347",
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
        >
          Details
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
