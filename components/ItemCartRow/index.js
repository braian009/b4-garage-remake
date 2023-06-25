import * as React from "react";
import styles from "./itemCartRow.module.css";

import Image from "next/image";

import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, setItemQuantity } from "@/redux/cartSlice";


const Options = ({ itemId, optionsNumber }) => {
  let values = [];

  for (let i = 0; i < optionsNumber; i++) {
    values.push(i + 1);
  }

  return values.map((value) => {
    return (
      <option key={`${itemId}-option-${value}`} value={value}>
        {value}
      </option>
    );
  });
};

const ItemCartRow = ({ item }) => {
  const dispatch = useDispatch();

  const itemTotalPrice = useSelector((state) => {
    const itemInCart = state.cart.items.find((i) => i.id === item.id);

    return Number(item.price * itemInCart.quantity).toFixed(2);
  });

  const inventory = useSelector((state) => {
    return state.products.items.find((i) => i.id === item.id).inventory;
  });

  return (
    <li className={styles.itemContainer}>
      <div className={styles.itemImage}>
        <Image src={item.image} alt="" fill />
      </div>
      <div className={styles.itemDetails}>
        <div className={styles.itemInfo}>
          <h4>{item.name}</h4>
          <p>{item.features}</p>
        </div>
        <div className={styles.itemQuantity}>
          <select
            name={`quantity-item${item.id}`}
            value={item.quantity}
            onChange={(e) =>
              dispatch(setItemQuantity({ id: item.id, amount: e.target.value }))
            }
          >
            <Options itemId={item.id} optionsNumber={inventory} />
          </select>
          <button onClick={() => dispatch(removeFromCart({ id: item.id }))}>
            Remove
          </button>
        </div>
        <div className={styles.itemPrice}>${Number(item.price).toFixed(2)}</div>
        <div className={styles.itemTotal}>${itemTotalPrice}</div>
      </div>
    </li>
  );
};

export default ItemCartRow;
