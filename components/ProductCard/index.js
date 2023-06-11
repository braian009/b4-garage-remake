import * as React from "react";
import styles from "./productCard.module.css";
import Image from "next/image";

import { useRouter } from "next/router";
import { getSlugFromString } from "@/utils/slugConverter";

const ProductCard = ({ item }) => {
  const router = useRouter();

  return (
    <div key={`product-${item.id}`} className={styles.container}>
      <div className={styles.cardImage}>
        <Image src={item.image} fill alt={""} />
      </div>
      <div className={styles.cardText}>
        <h4>{item.name}</h4>
        <p>${item.price}</p>
        <button
          onClick={() => {
            router.push({
              pathname: "/store/[type]/[item]",
              query: {
                type: getSlugFromString(item.type),
                item: getSlugFromString(item.name),
              },
            });
          }}
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
