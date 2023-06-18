import * as React from "react";
import styles from "./shoppingCart.module.css";

import LegendText from "@/components/varied/LegendText";
import ItemCartRow from "@/components/ItemCartRow";
import { useSelector, useDispatch } from "react-redux";
import { purchaseItems } from "@/redux/purchaseAction";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => {
    return state.cart.items.reduce((priceSum, item) => {
      return priceSum + item.price * item.quantity;
    }, 0);
  });

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
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
              <div className={styles.cartBody}>
                <ul className={styles.cartItems}>
                  {cartList.map((item) => {
                    return (
                      <ItemCartRow key={`cartItem-${item.id}`} item={item} />
                    );
                  })}
                </ul>
              </div>
              <div className={styles.cartFooter}>
                <div>Subtotal:</div>
                <div>${totalPrice.toFixed(2)}</div>
              </div>
            </div>
            <div className={styles.checkout}>
              <h4>Guest Checkout</h4>
              <p>Checkout without registering</p>
              <button
                onClick={() => dispatch(purchaseItems({ cart: cartList }))}
              >
                Proceed to checkout
              </button>
            </div>
          </>
        ) : (
          <div>There is nothing here yet</div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
