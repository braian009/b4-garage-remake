import * as React from "react";
import styles from "./productList.module.css";

import LineDecoration from "@/components/varied/LegendText/LineDecoration";
import ProductCard from "@/components/ProductCard";

import { useRouter } from "next/router";
import { getSlugFromString, getStringFromSlug } from "@/utils/slugConverter";

import { productTypes } from "@/data/store";
import { productsList } from "@/data/store";


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

const Store = ({ itemType, itemList }) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.storeText}>
          <h1>B4&apos;s Store</h1>
        </div>
        <div className={styles.storeNav}>
          <ul>
            {productTypes.map((type) => {
              return (
                <li
                  key={`productType-${type}`}
                  onClick={() => {
                    router.push({
                      pathname: "/store/[type]",
                      query: {
                        type: getSlugFromString(type),
                      },
                    });
                  }}
                >
                  {type}
                </li>
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
            return (
              <ProductCard key={`productCard-${item.id}`} item={item} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { getStaticPaths, getStaticProps };
export default Store;
