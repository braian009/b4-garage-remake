import * as React from "react";
import styles from "./shoppingCart.module.css";
import Image from "next/image";
import LegendText from "@/components/varied/LegendText";
import ItemCartRow from "@/components/ItemCartRow";
import { productsList } from "@/data/store";

const ShoppingCart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <h1>Your cart</h1>
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
          <div className={styles.cartBody}>
            <ul className={styles.cartItems}>
              <ItemCartRow item={productsList["wheels"][0]} />
            </ul>
          </div>
          <div className={styles.cartFooter}>
            <div>Subtotal:</div>
            <div>$444.00</div>
          </div>
        </div>
        <div className={styles.checkout}>
          <h4>Guest Checkout</h4>
          <p>Checkout without registering</p>
          <button>Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
