import * as React from "react";
import styles from "./product.module.css";

import Image from "next/image";
import LegendText from "@/components/varied/LegendText";

import { getSlugFromString, getStringFromSlug } from "@/utils/slugConverter";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import { productsList } from "@/data/store";

// const getStaticPaths = () => {
//   let paths = [];

//   Object.keys(productsList).forEach((product) => {
//     productsList[product].forEach((productItem) => {
//       paths.push({
//         params: {
//           type: getSlugFromString(productItem.type),
//           item: getSlugFromString(productItem.name),
//         },
//       });
//     });
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

// const getStaticProps = ({ params }) => {
//   const { type, item } = params;

//   return {
//     props: {
//       item: productsList[getStringFromSlug(type)].find((productItem) => {
//         return productItem.name === getStringFromSlug(item);
//       }),
//     },
//   };
// };

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
              <p>{item.features}</p>
            </div>
            <p>{item.description}</p>
            <div className={styles.infoFooter}>
              {isOutOfStock ? (
                <div className={styles.outOfStock}>item out of stock</div>
              ) : (
                <>
                  <p className={styles.price}>${Number(item.price).toFixed(2)}</p>

                  {isAlreadyinCart ? (
                    <div className={styles.added}>Added to cart!</div>
                  ) : (
                    <button
                      className={styles.addButton}
                      onClick={() => dispatch(addToCart({ item: item }))}
                    >
                      Add to cart
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export { getStaticPaths, getStaticProps };
export { getServerSideProps };
export default Product;
