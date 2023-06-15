import * as React from "react";
import styles from "./product.module.css";

import Image from "next/image";
import LegendText from "@/components/varied/LegendText";

import { getSlugFromString, getStringFromSlug } from "@/utils/slugConverter";
import { productsList } from "@/data/store";

const getStaticPaths = () => {
  let paths = [];

  Object.keys(productsList).forEach((product) => {
    productsList[product].forEach((productItem) => {
      paths.push({
        params: {
          type: getSlugFromString(productItem.type),
          item: getSlugFromString(productItem.name),
        },
      });
    });
  });

  return {
    paths,
    fallback: false,
  };
};

const getStaticProps = ({ params }) => {
  const { type, item } = params;

  return {
    props: {
      item: productsList[getStringFromSlug(type)].find((productItem) => {
        return productItem.name === getStringFromSlug(item);
      }),
    },
  };
};

const Product = ({ item }) => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.storeText}>
          <h1>B4&apos;s Store</h1>
          <LegendText text={item.type} />
        </div>
        <div className={styles.itemDetailsCard}>
          <div className={styles.productImage}>
            <Image src={`${item.image}`} fill alt={""} />
          </div>
          <div className={styles.productInfo}>
            <div className={styles.infoHeader}>
              <h4>{item.name}</h4>
            </div>
            <p>{item.details}</p>
            <div className={styles.infoFooter}>
              <p>$44.44</p>
              <div className={styles.cartButton}>Add to cart</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { getStaticPaths, getStaticProps };
export default Product;
