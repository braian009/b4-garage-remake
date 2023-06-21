import * as React from "react";
import styles from "./product.module.css";

import Image from "next/image";
import { motion } from "framer-motion";
import LegendText from "@/components/varied/LegendText";

import { getStringFromSlug } from "@/utils/slugConverter";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import { productsList } from "@/data/store";

const getServerSideProps = ({ params }) => {
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
  const dispatch = useDispatch();

  const isAlreadyinCart = useSelector((state) => {
    return state.cart.items.find((i) => i.id === item.id);
  });

  const isOutOfStock = useSelector((state) => {
    return state.products.items.find((i) => i.id === item.id).inventory === 0;
  });

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
              <p>{item.features}</p>
            </div>
            <p>{item.description}</p>
            <div className={styles.infoFooter}>
              {isOutOfStock ? (
                <div className={styles.outOfStock}>item out of stock</div>
              ) : (
                <>
                  <p className={styles.price}>
                    ${Number(item.price).toFixed(2)}
                  </p>

                  {isAlreadyinCart ? (
                    <div className={styles.added}>Added to cart!</div>
                  ) : (
                    <motion.button
                      className={styles.addButton}
                      onClick={() => dispatch(addToCart({ item: item }))}
                      whileHover={{
                        backgroundColor: "#1f1f1f",
                        color: "#eb6347",
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeOut",
                      }}
                    >
                      Add to cart
                    </motion.button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// export { getStaticPaths, getStaticProps };
export { getServerSideProps };
export default Product;
