import * as React from "react";
import styles from "./store.module.css";
import { productsList } from "@/data/store";
import LineDecoration from "@/components/varied/LegendText/LineDecoration";
import Image from "next/image";

const Store = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.storeText}>
          <h1>B4&apos;s Store</h1>
        </div>
        <div className={styles.storeNav}>
          <ul>
            <li>Fluids</li>
            <li>Spoilers</li>
            <li>Wheels</li>
            <li>Accesories</li>
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
          {productsList.wheels.map((product) => {
            return (
              <div key={`product-${product.id}`} className={styles.storeCard}>
                <div className={styles.cardImage}>
                  <Image src={product.image} fill alt={""} />
                </div>
                <div className={styles.cardText}>
                  <h4>{product.name}</h4>
                  <p>${product.price}</p>
                  <button>Details</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Store;
