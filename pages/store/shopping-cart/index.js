import * as React from "react";
import styles from "./shoppingCart.module.css";
import Image from "next/image";
import LegendText from "@/components/varied/LegendText";

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
            <LegendText text='Order summary'/>
          </div>
          <div className={styles.cartBody}>
            <ul className={styles.cartItems}>
              <li className={styles.cartItem}>
                <div className={styles.itemImage}>
                  <Image src="/bottle.png" alt="" fill />
                </div>
                <div className={styles.itemDetails}>
                  <div className={styles.itemInfo}>
                    <h4>Tire number 444</h4>
                    <p>with some especial details</p>
                  </div>
                  <div className={styles.itemQuantity}>4</div>
                  <div className={styles.itemPrice}>$44.00</div>
                  <div className={styles.itemTotal}>$176.00</div>
                </div>
              </li>
              <li className={styles.cartItem}>
                <div className={styles.itemImage}>
                  <Image src="/tirewheelll.png" alt="" fill />
                </div>
                <div className={styles.itemDetails}>
                  <div className={styles.itemInfo}>
                    <h4>Tire number 444</h4>
                    <p>with some especial details</p>
                  </div>
                  <div className={styles.itemQuantity}>4</div>
                  <div className={styles.itemPrice}>$44.00</div>
                  <div className={styles.itemTotal}>$176.00</div>
                </div>
              </li>
              <li className={styles.cartItem}>
                <div className={styles.itemImage}>
                  <Image src="/tirewheelll.png" alt="" fill />
                </div>
                <div className={styles.itemDetails}>
                  <div className={styles.itemInfo}>
                    <h4>Tire number 444</h4>
                    <p>with some especial details</p>
                  </div>
                  <div className={styles.itemQuantity}>4</div>
                  <div className={styles.itemPrice}>$44.00</div>
                  <div className={styles.itemTotal}>$176.00</div>
                </div>
              </li>
              <li className={styles.cartItem}>
                <div className={styles.itemImage}>
                  <Image src="/tirewheelll.png" alt="" fill />
                </div>
                <div className={styles.itemDetails}>
                  <div className={styles.itemInfo}>
                    <h4>Tire number 444</h4>
                    <p>with some especial details</p>
                  </div>
                  <div className={styles.itemQuantity}>4</div>
                  <div className={styles.itemPrice}>$44.00</div>
                  <div className={styles.itemTotal}>$176.00</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
