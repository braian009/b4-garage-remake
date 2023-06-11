import * as React from "react";
import styles from "./storeCard.module.css";

import Image from "next/image";
import { useRouter } from "next/router";

import { getSlugFromString } from "@/utils/slugConverter";

const StoreCard = ({ productType }) => {
  const router = useRouter();
  const imageName = productType.toLowerCase().replace(/\s+/g, "");

  return (
    <div
      className={styles.container}
      onClick={() => router.push(`/store/${getSlugFromString(productType)}`)}
    >
      <div className={styles.storeCardImage}>
        <Image src={`/${imageName}.jpg`} fill alt={""} />
      </div>
      <div className={styles.storeCardFooter}>
        <h4>Shop {productType}</h4>
        <div>
          <svg
            fill="#000000"
            width="800px"
            height="800px"
            viewBox="0 0 1920 1920"
          >
            <g fillRule="evenodd">
              <path d="M0 176.142 176.13.012l960.12 960.119L176.13 1920 0 1743.87l783.864-783.739L0 176.142Z" />
              <path d="M784 176.142 960.13.012l960.12 960.119L960.13 1920 784 1743.87l783.86-783.739L784 176.142Z" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default StoreCard;
