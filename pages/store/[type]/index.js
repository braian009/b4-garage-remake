import * as React from "react";
import styles from "./store.module.css";
import { productsList } from "@/data/store";
import LineDecoration from "@/components/varied/LegendText/LineDecoration";
import Image from "next/image";
import { useRouter } from "next/router";
import { getSlugFromString, getStringFromSlug } from "@/utils/slugConverter";

const getStaticPaths = () => {
  const paths = [
    {
      params: {
        type: "wheels",
      },
    },
    {
      params: {
        type: "engine-oil",
      },
    },
    {
      params: {
        type: "accesories",
      },
    },
  ];

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

const productTypes = ["Wheels", "Engine Oil", "Accesories"];

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
          {itemList.map((product) => {
            return (
              <div key={`product-${product.id}`} className={styles.storeCard}>
                <div className={styles.cardImage}>
                  <Image src={product.image} fill alt={""} />
                </div>
                <div className={styles.cardText}>
                  <h4>{product.name}</h4>
                  <p>${product.price}</p>
                  <button
                    onClick={() => {
                      router.push({
                        pathname: "/store/[type]/[item]",
                        query: {
                          type: getSlugFromString(itemType),
                          item: getSlugFromString(product.name),
                        },
                      });
                    }}
                  >
                    Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { getStaticPaths, getStaticProps };
export default Store;
