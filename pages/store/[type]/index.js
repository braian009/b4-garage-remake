import * as React from "react";
import styles from "./productList.module.css";

import LineDecoration from "@/components/varied/LegendText/LineDecoration";
import ProductCard from "@/components/ProductCard";

import { useRouter } from "next/router";

import { getSlugFromString, getStringFromSlug } from "@/utils/slugConverter";

import { productTypes } from "@/data/store";
import { productsList } from "@/data/store";
import { motion } from "framer-motion";
import GoBackButton from "@/components/varied/GoBackButton";

const getStaticPaths = () => {
  let paths = [];

  productTypes.forEach((type) => {
    paths.push({
      params: {
        type: getSlugFromString(type),
      },
    });
  });

  return {
    paths,
    fallback: false,
  };
};

const getStaticProps = ({ params }) => {
  const { type } = params;

  return {
    props: {
      itemType: getStringFromSlug(type),
      itemList: productsList[getStringFromSlug(type)],
    },
  };
};

const itemVariants = {
  active: {
    color: "#eb6347",
  },
  inactive: {
    color: "#242424",
  },
};

const Store = ({ itemType, itemList }) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.inner}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.4,
          duration: 0.4,
          type: "spring",
          stiffness: 400,
          damping: 75,
        }}
      >
        <GoBackButton/>
        <div className={styles.storeText}>
          <h1>B4&apos;s Store</h1>
        </div>
        <div className={styles.storeNav}>
          <ul>
            {productTypes.map((type) => {
              return (
                <motion.li
                  className={styles.navTag}
                  key={`productType-${type}`}
                  onClick={() => {
                    router.push({
                      pathname: "/store/[type]",
                      query: {
                        type: getSlugFromString(type),
                      },
                    });
                  }}
                  variants={itemVariants}
                  whileHover={"active"}
                  animate={
                    router.asPath === `/store/${getSlugFromString(type)}`
                      ? "active"
                      : "inactive"
                  }
                >
                  {type}
                  {router.asPath === `/store/${getSlugFromString(type)}` && (
                    <motion.div
                      layoutId="storeNavTag"
                      className={styles.navTagLine}
                    ></motion.div>
                  )}
                </motion.li>
              );
            })}
          </ul>
          <LineDecoration
            top={"0"}
            left={"0"}
            width={"150vw"}
            translateX={"-25%"}
            backgroundColor={"#727272"}
            height={"1px"}
            opacity={"0.4"}
          />
          <LineDecoration
            bottom={"0"}
            left={"0"}
            width={"150vw"}
            translateX={"-25%"}
            backgroundColor={"#727272"}
            height={"1px"}
            opacity={"0.4"}
          />
        </div>
        <div className={styles.storeCards}>
          {itemList.map((item) => {
            return <ProductCard key={`productCard-${item.id}`} item={item} />;
          })}
        </div>
      </motion.div>
    </div>
  );
};

export { getStaticPaths, getStaticProps };
export default Store;
