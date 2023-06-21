import * as React from "react";
import styles from "./shoppingCart.module.css";

import { motion } from "framer-motion";
import LegendText from "@/components/varied/LegendText";
import ItemCartRow from "@/components/ItemCartRow";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

const ShoppingCart = () => {
  const cartList = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => {
    return state.cart.items.reduce((priceSum, item) => {
      return priceSum + item.price * item.quantity;
    }, 0);
  });

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
        <h1>Your cart</h1>

        {cartList.length ? (
          <>
            <div className={styles.cart}>
              <div className={styles.cartHeader}>
                <ul>
                  <li>Item</li>
                  <li>Quantity</li>
                  <li>Price</li>
                  <li>Item total</li>
                </ul>
                <LegendText text="Order summary" />
              </div>
              <motion.div className={styles.cartBody}>
                <motion.ul className={styles.cartItems}>
                  {cartList.map((item) => {
                    return (
                      <ItemCartRow key={`cartItem-${item.id}`} item={item} />
                    );
                  })}
                </motion.ul>
              </motion.div>
              <div className={styles.cartFooter}>
                <div>Subtotal:</div>
                <div>${totalPrice.toFixed(2)}</div>
              </div>
            </div>
            <div className={styles.checkout}>
              <h4>Guest Checkout</h4>
              <p>Checkout without registering</p>
              <motion.button
                onClick={() => router.push("/store/checkout")}
                whileHover={{
                  backgroundColor: "#1f1f1f",
                  color: "#eb6347",
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
              >
                Proceed to checkout
              </motion.button>
            </div>
          </>
        ) : (
          <motion.div
            className={styles.emptyCart}
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
            <LegendText text="There's no items in your cart yet" />
            <motion.div
              onClick={() => router.back()}
              whileHover={{
                backgroundColor: "#1f1f1f",
                color: "#eb6347",
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            >
              Continue
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default ShoppingCart;
